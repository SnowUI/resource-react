<!-- AI-CONTRACT: tier=L1 | id=snowui-resource-react | scope=snowui/resource-react -->
# SnowUI Resource React 仓库规则（L1）

读者：在 `snowui/resource-react` 工作的维护者与 AI。本仓库维护公开包 `@snowui-design-system/resource-react`，由 `resource-base` 派生生成 React 图标、头像、插画、Logo、背景与动态 `Icon` / `IconProvider` 组件。

## 红线与章节索引

- `[RR-READ-01]` 必读顺序：[Project/AGENTS.md](../../AGENTS.md) → [snowui/AGENTS.md](../AGENTS.md) → 本文件 → 命中专题 → §1
- `[RR-GEN-01]` 派生 TSX 资源组件统一由 `scripts/generate-react.ts` 从 `resource-base` 生成，严禁脱离上游单独增改素材 → §2
- `[RR-RIGHTS-01]` [OWNER_RESOURCE_LICENSE_CONFIRMATION.md](OWNER_RESOURCE_LICENSE_CONFIRMATION.md) 与 [RESOURCE_LICENSE_MANIFEST.json](RESOURCE_LICENSE_MANIFEST.json) 须与 `resource-base` 严格一致 → §2
- `[RR-PUBLIC-01]` 公开英文交付文件（[README.md](README.md)、[PACKAGE_LICENSE.md](PACKAGE_LICENSE.md)、[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)）统一使用英文且严禁含本机路径 → §2

## 1. 启动阅读链与一跳路由

开始任何任务前，先完成 `[Project/AGENTS.md](../../AGENTS.md) → [snowui/AGENTS.md](../AGENTS.md) → 本文件`（独立检出缺少上层规则时先说明缺口，不假称已读取），再按意图一跳直达：

| 任务意图 | 本仓与共享权威落点 |
| --- | --- |
| 运行时 `Icon` / `IconProvider` 与切换解析 | [src/lib/Icon.tsx](src/lib/Icon.tsx) · [src/lib/IconBase.tsx](src/lib/IconBase.tsx) · [src/lib/IconProvider.tsx](src/lib/IconProvider.tsx) · [src/lib/switch-resolver.ts](src/lib/switch-resolver.ts) |
| React 组件生成器与 SVG 转 JSX | [scripts/generate-react.ts](scripts/generate-react.ts) · [scripts/utils/svg-to-jsx.ts](scripts/utils/svg-to-jsx.ts) · [scripts/README.md](scripts/README.md) → [src/index.ts](src/index.ts) |
| 资源权利继承清单与第三方声明 | [scripts/resource-license-manifest.mjs](scripts/resource-license-manifest.mjs) → [RESOURCE_LICENSE_MANIFEST.json](RESOURCE_LICENSE_MANIFEST.json) · [OWNER_RESOURCE_LICENSE_CONFIRMATION.md](OWNER_RESOURCE_LICENSE_CONFIRMATION.md) · [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) |
| 本仓阶段计划／历史与上游边界 | [docs/planning/项目计划.md](docs/planning/项目计划.md) · `docs/history/` · [../resource-base/AGENTS.md](../resource-base/AGENTS.md) · [ReleaseSpec.md](../docs/standards/ReleaseSpec.md) |

## 2. 仓库职责与维护边界

1. **同源生成与双模读取**：图标与素材以 `../resource-base` 为唯一资产源；生成脚本优先读取同级 `../resource-base` 目录并在独立检出时回退到已安装包，更新后同步执行 `pnpm generate` 与 `pnpm license:manifest`。
2. **公开包卫生与目录分层**：本仓面向外部发布的根级文档与代码注释统一使用英文；内部中文规划与历史记录仅保存在 `docs/planning/` 与 `docs/history/`（通过 `.npmignore` 排除出 npm 产物，且不保留无正文文档中转页）。
3. **跨框架对齐与验收门禁**：运行时 API 与 `../resource-svelte` 保持语义对齐；验证与测试门禁仅在 Owner 下达验收指令后执行。
