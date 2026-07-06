import { promises as fs } from 'fs';
import * as path from 'path';
import { readIconAssets, readMaterialAssets } from './utils/read-assets';
import {
  wrapSvgAsJsx,
  generateIconComponentCode,
  generateAvatarComponentCode,
  generateIllustrationComponentCode,
} from './utils/generate-component';

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

async function writeFileIfChanged(filePath: string, content: string) {
  try {
    const existing = await fs.readFile(filePath, 'utf8');
    if (existing === content) return;
  } catch {}
  await fs.writeFile(filePath, content, 'utf8');
}

const materialGroups = [
  { folder: 'avatars', namespace: 'AvatarAsset' },
  { folder: 'backgrounds', namespace: 'BackgroundAsset' },
  { folder: 'cursors', namespace: 'CursorAsset' },
  { folder: 'emoji', namespace: 'EmojiAsset' },
  { folder: 'illustrations', namespace: 'IllustrationAsset' },
  { folder: 'images', namespace: 'ImageAsset' },
  { folder: 'logos', namespace: 'LogoAsset' },
] as const;

const COLLECTION_PRIORITY = ['snowui', 'phosphor', 'special'] as const;

function toPascalCaseSafe(name: string): string {
  return name.replace(/(^\w|[-_]\w)/g, (segment) => segment.replace(/[-_]/, '').toUpperCase());
}

function sanitizeComponentName(name: string, group: string): string {
  const pascal = toPascalCaseSafe(name);
  if (/^[A-Za-z_]/.test(pascal)) {
    return pascal;
  }
  return toPascalCaseSafe(`${group}-${name}`);
}

async function main() {
  const reactPkgDir = path.resolve(__dirname, '..');
  const srcDir = path.join(reactPkgDir, 'src');

  const repoRoot = path.resolve(reactPkgDir, '..');
  const monorepoCoreDir = path.join(repoRoot, 'resource-base');
  const npmCoreDir = path.join(reactPkgDir, 'node_modules', '@snowui-design-system', 'resource-base');

  let resourceCoreDir: string;
  try {
    await fs.access(monorepoCoreDir);
    resourceCoreDir = monorepoCoreDir;
    console.log('📦 Using monorepo resource-base:', resourceCoreDir);
  } catch {
    try {
      await fs.access(npmCoreDir);
      resourceCoreDir = npmCoreDir;
      console.log('📦 Using npm package resource-base:', resourceCoreDir);
    } catch {
      console.error('❌ Cannot find resource-base directory.');
      process.exit(1);
    }
  }

  const iconsDir = path.join(srcDir, 'icons');
  await ensureDir(iconsDir);
  for (const group of materialGroups) {
    await ensureDir(path.join(srcDir, group.folder));
  }

  const icons = await readIconAssets(resourceCoreDir);
  const materialAssets = new Map<string, Awaited<ReturnType<typeof readMaterialAssets>>>();
  for (const group of materialGroups) {
    materialAssets.set(group.folder, await readMaterialAssets(resourceCoreDir, group.folder));
  }

  let generated = 0;

  const iconsByCollection = new Map<string, typeof icons>();
  for (const icon of icons) {
    if (!iconsByCollection.has(icon.collection)) iconsByCollection.set(icon.collection, []);
    iconsByCollection.get(icon.collection)!.push(icon);
  }

  interface CollectionExport {
    collection: string;
    components: Array<{ pascalName: string; kebabName: string }>;
  }
  const collectionExports: CollectionExport[] = [];
  const allExpectedIconFiles = new Set<string>();

  for (const collection of [...iconsByCollection.keys()].sort()) {
    const list = iconsByCollection.get(collection)!;
    const colDir = path.join(iconsDir, collection);
    await ensureDir(colDir);

    const exports: Array<{ pascalName: string; kebabName: string }> = [];
    const byNameImports: string[] = [];
    const byNameEntries: string[] = [];

    for (const icon of list) {
      const compName = icon.pascalName;
      if (!compName) continue;
      const { weightsLiteral, viewBox } = wrapSvgAsJsx(icon.weights as Record<string, string>, compName);
      const code = generateIconComponentCode(compName, weightsLiteral, viewBox, {
        collection: icon.collection,
        usageName: icon.kebabName,
      });
      const outPath = path.join(colDir, `${compName}.tsx`);
      await writeFileIfChanged(outPath, code);
      allExpectedIconFiles.add(path.join(collection, `${compName}.tsx`));
      exports.push({ pascalName: compName, kebabName: icon.kebabName });
      byNameImports.push(`import ${compName} from './${compName}';`);
      byNameEntries.push(`  '${icon.kebabName}': ${compName},`);
      generated++;
    }

    exports.sort((a, b) => a.pascalName.localeCompare(b.pascalName));

    // collection barrel
    const barrelLines = [
      ...exports.map((e) => `export { default as ${e.pascalName} } from './${e.pascalName}';`),
      '',
    ];
    await writeFileIfChanged(path.join(colDir, 'index.ts'), barrelLines.join('\n'));

    // collection by-name
    const byNameContent = [
      ...byNameImports.sort(),
      '',
      'export const iconsByName = {',
      ...byNameEntries.sort(),
      '} as const;',
      '',
      'export type IconName = keyof typeof iconsByName;',
      '',
    ].join('\n');
    await writeFileIfChanged(path.join(colDir, 'by-name.ts'), byNameContent);

    allExpectedIconFiles.add(path.join(collection, 'index.ts'));
    allExpectedIconFiles.add(path.join(collection, 'by-name.ts'));

    collectionExports.push({ collection, components: exports });
  }

  // 顶级 src/icons/index.ts：扁平 + namespace
  const flatExportOrder = [
    ...COLLECTION_PRIORITY.filter((c) => iconsByCollection.has(c)),
    ...[...iconsByCollection.keys()].filter((c) => !COLLECTION_PRIORITY.includes(c as any)).sort(),
  ];
  const flatSeen = new Set<string>();
  const flatLines: string[] = [];
  for (const collection of flatExportOrder) {
    const list = collectionExports.find((c) => c.collection === collection)!.components;
    for (const c of list) {
      if (flatSeen.has(c.pascalName)) continue;
      flatLines.push(`export { default as ${c.pascalName} } from './${collection}/${c.pascalName}';`);
      flatSeen.add(c.pascalName);
    }
  }
  const namespaceLines = flatExportOrder.map(
    (collection) => `export * as ${collection} from './${collection}';`,
  );
  const iconsIndexContent = [
    '// Auto-generated by scripts/generate-react.ts. Do not edit.',
    `// Flat exports use priority order: ${flatExportOrder.join(' > ')}.`,
    `// Access overridden components via subpath, e.g.`,
    `//   import { Clipboard } from '@snowui-design-system/resource-react/icons/phosphor'`,
    '',
    ...flatLines,
    '',
    '// Namespaced collections',
    ...namespaceLines,
    '',
  ].join('\n');
  await writeFileIfChanged(path.join(iconsDir, 'index.ts'), iconsIndexContent);
  allExpectedIconFiles.add('index.ts');

  // 全局 by-name：iconsByCollection / iconsByDefault
  const globalImports: string[] = [];
  const colMapEntries: string[] = [];
  const defaultMapEntries = new Map<string, { collection: string; pascalName: string }>();
  for (const collection of flatExportOrder) {
    const list = collectionExports.find((c) => c.collection === collection)!.components;
    const inner: string[] = [];
    for (const c of list) {
      const alias = `${collection}_${c.pascalName}`;
      globalImports.push(`import ${alias} from './${collection}/${c.pascalName}';`);
      inner.push(`    '${c.kebabName}': ${alias},`);
      if (!defaultMapEntries.has(c.kebabName)) {
        defaultMapEntries.set(c.kebabName, { collection, pascalName: c.pascalName });
      }
    }
    colMapEntries.push(`  ${collection}: {\n${inner.join('\n')}\n  },`);
  }
  const defaultMapLines = [...defaultMapEntries.entries()].sort().map(
    ([k, v]) => `  '${k}': ${v.collection}_${v.pascalName},`,
  );
  // 懒求值 Proxy，避免与 IconBase 形成模块循环依赖的 TDZ（详见 Svelte 端同名注释）
  const globalByName = [
    '// Auto-generated by scripts/generate-react.ts. Do not edit.',
    ...globalImports.sort(),
    '',
    'type Registry = Record<string, Record<string, any>>;',
    'type DefaultMap = Record<string, any>;',
    '',
    'let _byCol: Registry | null = null;',
    'let _byDef: DefaultMap | null = null;',
    '',
    'function _ensure() {',
    '  if (_byCol) return;',
    '  _byCol = {',
    ...colMapEntries.map((line) => '  ' + line),
    '  };',
    '  _byDef = {',
    ...defaultMapLines.map((line) => '  ' + line),
    '  };',
    '}',
    '',
    'export const iconsByCollection: Registry = new Proxy({} as Registry, {',
    '  get(_, prop) { _ensure(); return _byCol![prop as string]; },',
    '  has(_, prop) { _ensure(); return (prop as string) in _byCol!; },',
    '  ownKeys() { _ensure(); return Object.keys(_byCol!); },',
    '  getOwnPropertyDescriptor(_, prop) {',
    '    _ensure();',
    '    if (!((prop as string) in _byCol!)) return undefined;',
    '    return { enumerable: true, configurable: true, value: _byCol![prop as string] };',
    '  },',
    '});',
    '',
    'export const iconsByDefault: DefaultMap = new Proxy({} as DefaultMap, {',
    '  get(_, prop) { _ensure(); return _byDef![prop as string]; },',
    '  has(_, prop) { _ensure(); return (prop as string) in _byDef!; },',
    '  ownKeys() { _ensure(); return Object.keys(_byDef!); },',
    '});',
    '',
    'export type IconUsageName = string;',
    'export type IconCollectionName = string;',
    '',
  ].join('\n');
  await writeFileIfChanged(path.join(iconsDir, 'by-name.ts'), globalByName);

  // 清理旧扁平 *.tsx
  try {
    const top = await fs.readdir(iconsDir, { withFileTypes: true });
    for (const e of top) {
      if (e.isFile() && e.name.endsWith('.tsx')) {
        await fs.unlink(path.join(iconsDir, e.name));
      }
    }
    for (const collection of iconsByCollection.keys()) {
      const colDir = path.join(iconsDir, collection);
      const entries = await fs.readdir(colDir);
      for (const f of entries) {
        if (!f.endsWith('.tsx')) continue;
        if (!allExpectedIconFiles.has(path.join(collection, f))) {
          await fs.unlink(path.join(colDir, f));
        }
      }
    }
  } catch {}

  // ---- materials ----
  const materialGroupData = new Map<
    string,
    { barrelExports: Set<string>; count: number; componentNames: string[] }
  >();
  for (const group of materialGroups) {
    materialGroupData.set(group.folder, { barrelExports: new Set<string>(), count: 0, componentNames: [] });
  }

  for (const group of materialGroups) {
    const assets = materialAssets.get(group.folder) ?? [];
    const data = materialGroupData.get(group.folder)!;

    for (const asset of assets) {
      const firstFile = asset.files[0];
      if (!firstFile) continue;
      const compName = sanitizeComponentName(asset.name, group.folder);
      if (!compName) continue;

      if (!asset.name.match(/-\d+$/)) {
        const sizes = asset.files.map((f) => (f as any).size).filter((s): s is number => s !== undefined);
        const allSizesAreVariants =
          sizes.length > 0 && sizes.every((s) => s >= 1 && s <= 10) && !sizes.some((s) => s >= 16);
        if (allSizesAreVariants) {
          const hasDefaultFile = asset.files.some((f) => (f as any).size === undefined);
          if (!hasDefaultFile) continue;
        }
      }

      const sizeFiles = asset.files
        .filter((f) => (f as any).size !== undefined)
        .map((f) => ({ size: (f as any).size as number, path: f.path }))
        .sort((a, b) => a.size - b.size);
      const defaultFile = asset.files.find((f) => (f as any).size === undefined) || firstFile;

      let code: string;
      if (group.folder === 'illustrations') {
        code = generateIllustrationComponentCode(compName, defaultFile.path, sizeFiles.length > 0 ? sizeFiles : undefined, 320);
      } else if (group.folder === 'backgrounds') {
        code = generateIllustrationComponentCode(compName, defaultFile.path, sizeFiles.length > 0 ? sizeFiles : undefined, 1024);
      } else if (group.folder === 'images') {
        code = generateIllustrationComponentCode(compName, defaultFile.path, sizeFiles.length > 0 ? sizeFiles : undefined, 320);
      } else {
        const defaultSize = group.folder === 'avatars' ? 32 : 32;
        code = generateAvatarComponentCode(compName, defaultFile.path, sizeFiles.length > 0 ? sizeFiles : undefined, defaultSize);
      }

      const outPath = path.join(srcDir, group.folder, `${compName}.tsx`);
      await writeFileIfChanged(outPath, code);
      data.barrelExports.add(`export { default as ${compName} } from './${compName}';`);
      data.componentNames.push(compName);
      data.count++;
      generated++;
    }
  }

  // 顶层 src/index.ts
  const exportLines: string[] = [];
  exportLines.push(`export * from './icons';`);
  exportLines.push(`export { iconsByCollection, iconsByDefault } from './icons/by-name';`);
  exportLines.push(`export type { IconUsageName, IconCollectionName } from './icons/by-name';`);

  const usedNames = new Set<string>([...defaultMapEntries.keys()].map((k) => toPascalCaseSafe(k)));
  for (const group of materialGroups) {
    const data = materialGroupData.get(group.folder)!;
    for (const exportLine of data.barrelExports) {
      const match = exportLine.match(/export \{ default as (\w+) \} from '\.\/(\w+)';/);
      if (match) {
        const [, compName] = match;
        if (!usedNames.has(compName)) {
          exportLines.push(`export { default as ${compName} } from './${group.folder}/${compName}';`);
          usedNames.add(compName);
        }
      }
    }
    const barrelPath = path.join(srcDir, group.folder, 'index.ts');
    const barrelContent =
      data.barrelExports.size > 0 ? Array.from(data.barrelExports).join('\n') + '\n' : 'export {};\n';
    await writeFileIfChanged(barrelPath, barrelContent);
  }

  const componentNamesMapping: Record<string, string[]> = {};
  for (const group of materialGroups) {
    componentNamesMapping[group.folder] = materialGroupData.get(group.folder)!.componentNames.sort();
  }
  const componentNamesContent = [
    '// Auto-generated component names mapping',
    'export const componentNames = {',
    ...Object.entries(componentNamesMapping).map(([category, names]) => {
      return `  ${category}: [${names.map((n) => `'${n}'`).join(', ')}],`;
    }),
    '} as const;',
    '',
    'export type ComponentCategory = keyof typeof componentNames;',
    '',
  ].join('\n');
  await writeFileIfChanged(path.join(srcDir, 'component-names.ts'), componentNamesContent);

  exportLines.push(`export { componentNames } from './component-names';`);
  exportLines.push(`export type { ComponentCategory } from './component-names';`);
  exportLines.push(`export { Icon } from './lib/Icon';`);
  exportLines.push(`export { IconProvider, useIconContext } from './lib/IconProvider';`);
  exportLines.push('');
  await writeFileIfChanged(path.join(srcDir, 'index.ts'), exportLines.join('\n'));

  console.log(`Generated ${generated} components.`);
  const materialSummary = materialGroups.map((g) => `${g.folder}: ${materialGroupData.get(g.folder)?.count ?? 0}`).join(', ');
  const iconSummary = [...iconsByCollection.entries()].map(([c, l]) => `${c}: ${l.length}`).join(', ');
  console.log(`Icons by collection: ${iconSummary}`);
  console.log(`Materials: ${materialSummary}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
