# Generate Scripts

This directory contains scripts for generating React components from `@snowui-design-system/resource-base`.

## 📁 Files

- `generate-react.ts` - Main script that generates React components
- `utils/` - Utility functions used by the generate script
  - `read-assets.ts` - Reads icon and material assets
  - `generate-component.ts` - Generates React component code
  - `svg-to-jsx.ts` - Converts SVG to JSX

## 🚀 Usage

```bash
# From resource-react directory
npm run generate
```

## 🔍 How It Works

The script automatically detects the environment:

1. **Monorepo mode** (when running from `snowui` monorepo):
   - Looks for `../resource-base` directory
   - Uses local resource-core package

2. **Standalone mode** (when running from independent repository):
   - Looks for `node_modules/@snowui-design-system/resource-base`
   - Uses installed npm package

## 📝 What It Does

1. Reads all icons and materials from `resource-core`
2. Generates React components for each asset
3. Creates unified export file (`src/index.ts`)
4. Creates component name mapping (`src/component-names.ts`)
5. Cleans up unused component files

## ⚠️ Note

The generated components in `src/` are already included in the repository. You typically don't need to run this script unless:
- You're modifying the generation logic
- You're updating `@snowui-design-system/resource-base` and need to regenerate components
- You're contributing to the project

