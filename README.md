# @snowui-design-system/resource-react

轻量的 React 组件包，通过从 `@snowui-design-system/resource-core` 中的已处理素材自动生成图标、头像、背景等组件，开箱即用，支持 TypeScript 与 Tree-shaking。

## 功能特点

- ✅ 从核心资源包自动生成 React 组件（Icon/Avatar/Background/Cursor/Emoji/Illustration/Image/Logo）
- ✅ 支持多权重图标：regular / thin / light / bold / fill / duotone
- ✅ TypeScript 类型完善，支持 JSX/TSX 智能提示
- ✅ 生成统一导出入口，便于按需引入与 Tree-shaking
- ✅ 无命名空间，直接导出所有组件
- ✅ 支持通过原始名称和规范名称引用图标

## 安装

在消费方项目（例如 `apps/react`）中安装：

```bash
npm install @snowui-design-system/resource-react
# 或
pnpm add @snowui-design-system/resource-react
# 或
yarn add @snowui-design-system/resource-react
```

**重要提示**：
- ✅ **只需安装 `resource-react` 包即可**，`resource-core` 会自动作为依赖安装
- ✅ 所有素材资源都通过 `resource-core` 提供，无需单独安装
- ✅ 安装后即可使用所有类型的素材（图标、头像、背景、光标、表情、插画、图片、Logo）

如果你在 monorepo 根目录执行安装，请使用 workspace/filter 指定目标包。

## 使用示例

### 图标使用

#### 方式 1: 直接导入组件（推荐）

```tsx
import { FourLeafClover } from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      {/* 使用默认权重（regular）和默认颜色 */}
      <FourLeafClover size={24} />
      
      {/* 指定权重 */}
      <FourLeafClover size={24} weight="bold" />
      <FourLeafClover size={24} weight="fill" />
      
      {/* 使用 className 设置颜色 */}
      <FourLeafClover size={24} className="text-blue-500" />
      
      {/* 使用字符串尺寸 */}
      <FourLeafClover size="1.5em" className="text-pink-500" />
    </div>
  );
}
```

#### 方式 2: 通过 icons 对象使用 kebab-case 名称

```tsx
import { icons } from '@snowui-design-system/resource-react';
import React from 'react';

export default function Demo() {
  const FourLeafCloverIcon = icons['four-leaf-clover'];
  
  return (
    <div>
      {React.createElement(FourLeafCloverIcon, { 
        size: 24, 
        weight: 'fill', 
        className: 'text-emerald-500' 
      })}
    </div>
  );
}
```

### 头像组件

```tsx
import { AvatarByewind } from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      {/* 使用 size 属性 */}
      <AvatarByewind size={64} className="rounded-full" />
      
      {/* 使用 width 和 height 属性 */}
      <AvatarByewind width={120} height={120} className="rounded-full" />
    </div>
  );
}
```

### 背景组件

```tsx
import { Gradient01 } from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      {/* 作为普通图片使用 */}
      <div className="w-120px h-80px rounded-8px overflow-hidden">
        <Gradient01 width={120} height={80} className="object-cover" />
      </div>
      
      {/* 作为背景使用 */}
      <div className="w-[400px] h-[200px] rounded-12px relative overflow-hidden">
        <Gradient01 className="block w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="px-16px py-8px rounded-8px bg-black/40 text-white">
            背景示例
          </span>
        </div>
      </div>
    </div>
  );
}
```

### 光标组件

```tsx
import { CursorsBeachball } from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      <CursorsBeachball size={48} />
    </div>
  );
}
```

### 表情组件

```tsx
import { FaceBlowingKiss, RedHeart } from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      <FaceBlowingKiss size={48} />
      <RedHeart size={32} />
    </div>
  );
}
```

### 插画组件

```tsx
import { Illustration01, Voice } from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      <Illustration01 width={200} height={200} />
      <Voice size={150} />
    </div>
  );
}
```

### 图片组件

```tsx
import { Images3Dvideo01, Dolphin } from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      <Images3Dvideo01 width={300} height={200} />
      <Dolphin size={200} />
    </div>
  );
}
```

### Logo 组件

```tsx
import { Google, Apple, Github } from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      <Google size={48} />
      <Apple size={48} />
      <Github size={48} />
    </div>
  );
}
```

## 组件 Props

### 图标组件 Props

```typescript
interface IconProps {
  size?: number | string;        // 图标尺寸（数字为像素，字符串为 CSS 值）
  weight?: 'regular' | 'thin' | 'light' | 'bold' | 'fill' | 'duotone';  // 图标权重
  className?: string;             // CSS 类名（用于设置颜色等样式）
  color?: string;                 // 图标颜色（已废弃，推荐使用 className）
}
```

### 素材组件 Props（Avatar/Background/Cursor/Emoji/Illustration/Image/Logo）

```typescript
interface AvatarProps {
  size?: number;                  // 尺寸（同时设置 width 和 height）
  width?: number;                 // 宽度
  height?: number;                // 高度
  className?: string;             // CSS 类名
}
```

## 生成组件（开发者指南）

本包的组件由脚本从 `resource/core/assets` 自动生成。如果你在本仓库中开发、需要重新生成组件，请执行：

```bash
# 进入本包目录
cd resource/react

# 安装依赖（首次或依赖变更时）
pnpm install

# 运行生成脚本（读取 resource/core/assets 并生成组件到 src/）
pnpm run generate
```

生成脚本会产出：
- `src/icons/*.tsx`：图标组件（按权重合并）
- `src/avatars/*.tsx`：头像组件
- `src/backgrounds/*.tsx`：背景组件
- `src/cursors/*.tsx`：光标组件
- `src/emoji/*.tsx`：表情组件
- `src/illustrations/*.tsx`：插画组件
- `src/images/*.tsx`：图片组件
- `src/logos/*.tsx`：Logo 组件
- `src/index.ts`：统一导出入口

注意：`src/lib/` 下为手写基础库文件（`types.ts`、`utils.ts` 等），请勿删除。

若需"干净重生"，可先清理生成目录再运行：
```bash
cd resource/react/src
rm -rf icons avatars backgrounds cursors emoji illustrations images logos index.ts
cd ..
pnpm run generate
```

## 构建

```bash
cd resource/react
pnpm run build
```

打包产物输出至 `dist/`，包含 ESM/CJS 与类型定义。

## 发布包

### 发布前准备

1. **确保 core 包已处理**
   ```bash
   cd ../core
   npm run process
   ```

2. **生成 React 组件**
   ```bash
   cd ../react
   pnpm run generate
   ```

3. **构建包**
   ```bash
   pnpm run build
   ```

4. **更新版本号**
   ```bash
   # 手动编辑 package.json 或使用 npm version
   npm version patch  # 1.0.0 -> 1.0.1
   npm version minor  # 1.0.0 -> 1.1.0
   npm version major  # 1.0.0 -> 2.0.0
   ```

### 发布到 npm

```bash
# 登录 npm（首次发布需要）
npm login

# 发布公开包（scoped package 必须使用 --access public）
npm publish --access public
```

### 验证发布

```bash
# 查看已发布的包
npm view @snowui-design-system/resource-react

# 测试安装
npm install @snowui-design-system/resource-react
```

## 依赖

- **运行时**：`react` (>=18 <21)
- **开发时**：`typescript`、`tsup`、`tsx`、`@svgr/core`
- **核心依赖**：`@snowui-design-system/resource-core`

## 工作流建议

1. 在 `resource/core` 中维护与处理素材（命名、压缩、优化、目录结构）。
2. 在 `resource/react` 中运行生成脚本产出组件。
3. 在消费方项目（如 `apps/react`）中安装并使用本包。

## 注意事项

1. **命名冲突**：如果不同素材类型有重名（如图标和表情都有 `Bomb`），优先使用图标组件。
2. **组件命名**：组件名使用 PascalCase，基于素材的 kebab-case 名称转换而来。
3. **图标权重**：图标组件支持 `weight` 属性切换不同权重，默认使用 `regular`。
4. **颜色设置**：推荐使用 `className` 设置图标颜色，而不是 `color` 属性。

## 常见问题

### Q: 如何引用特定权重的图标？

A: 使用 `weight` 属性：
```tsx
<FourLeafClover size={24} weight="bold" />
```

### Q: 如何设置图标颜色？

A: 使用 `className` 属性：
```tsx
<FourLeafClover size={24} className="text-blue-500" />
```

### Q: 如何通过文件名引用图标？

A: 使用 `icons` 对象：
```tsx
import { icons } from '@snowui-design-system/resource-react';
const Icon = icons['four-leaf-clover'];
```

### Q: 组件名称是如何生成的？

A: 基于素材的 kebab-case 名称转换为 PascalCase。例如：`four-leaf-clover` → `FourLeafClover`。

## 许可证

MIT
