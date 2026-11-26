# SnowUI Resource React — AI Entry

`@snowui-design-system/resource-react` provides named React components and dynamic icon resolvers for SnowUI icons, avatars, backgrounds, illustrations, and logos, generated from `@snowui-design-system/resource-base`.

## Documentation & License Entrypoints

- Package overview & quick start: [README.md](./README.md)
- Generation script notes: [scripts/README.md](./scripts/README.md)
- Named material catalog (JSON): https://snowui.dev/llms/resources.json
- SnowUI documentation: https://snowui.dev/llms-en.txt
- Package license & attributions: [PACKAGE_LICENSE.md](./PACKAGE_LICENSE.md) · [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)

## Usage Guidelines for AI

1. **Scope**: this package provides React icon and material components (`react` 18–20). Note that the official UI component library (`@snowui-design-system/components`) targets Svelte 5; do not assume React UI components exist under `@snowui-design-system/components`.
2. **Prefer named imports**: import individual icon, avatar, illustration, or gradient components from `@snowui-design-system/resource-react` so bundlers tree-shake unused assets.
3. **License compliance**: retain [PACKAGE_LICENSE.md](./PACKAGE_LICENSE.md) and [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).
