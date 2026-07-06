import type { IconMeta, ReplacePolicy } from "./types";

export interface ResolvedSwitch {
  collection: string;
  iconName: string;
}

function matchesPreservePattern(pattern: string, meta: IconMeta): boolean {
  if (pattern.startsWith("usage:")) return meta.usageName === pattern.slice(6);
  if (pattern.startsWith("component:")) return meta.componentName === pattern.slice(10);
  return pattern === `${meta.collection}:${meta.usageName}`;
}

function lookupReplaceMap(
  policy: ReplacePolicy,
  meta: IconMeta,
): ResolvedSwitch | undefined {
  if (!policy.replaceMap) return undefined;
  const keys = [
    `component:${meta.componentName}`,
    `${meta.collection}:${meta.usageName}`,
    `usage:${meta.usageName}`,
  ];
  for (const k of keys) {
    const v = policy.replaceMap[k];
    if (!v) continue;
    const idx = v.lastIndexOf(":");
    if (idx <= 0) continue;
    const targetCol = v.slice(0, idx);
    const targetName = v.slice(idx + 1);
    if (!targetCol || !targetName) continue;
    return { collection: targetCol, iconName: targetName };
  }
  return undefined;
}

/**
 * 解析顺序与 Svelte 版一致：preserve > replaceMap > targetCollection > priority
 */
export function resolveSwitch(
  meta: IconMeta,
  policy: ReplacePolicy | undefined,
  registry: Record<string, Record<string, unknown>>,
): ResolvedSwitch | null {
  if (!policy) return null;

  for (const p of policy.preserve ?? []) {
    if (matchesPreservePattern(p, meta)) return null;
  }

  const rm = lookupReplaceMap(policy, meta);
  if (rm && registry[rm.collection]?.[rm.iconName]) {
    if (rm.collection === meta.collection && rm.iconName === meta.usageName) return null;
    return rm;
  }

  if (policy.targetCollection && policy.targetCollection !== meta.collection) {
    if (registry[policy.targetCollection]?.[meta.usageName]) {
      return { collection: policy.targetCollection, iconName: meta.usageName };
    }
  }

  if (policy.priority && policy.priority.length > 0) {
    const candidates = policy.priority.filter((col) => registry[col]?.[meta.usageName]);
    if (candidates.length > 0) {
      const top = candidates[0];
      if (top !== meta.collection) return { collection: top, iconName: meta.usageName };
    }
  }

  return null;
}
