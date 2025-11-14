# @snowui-design-system/resource-react

<div align="center">

**Lightweight React component package for SnowUI Design System**

[English](#english) | [中文](#中文)

</div>

---

## English

A lightweight React component package that automatically generates icon, avatar, background, and other components from processed assets in `@snowui-design-system/resource-core`. Ready to use out of the box with TypeScript support and Tree-shaking.

### ✨ Features

- ✅ Auto-generated React components from core assets (Icon/Avatar/Background/Cursor/Emoji/Illustration/Image/Logo)
- ✅ Multi-weight icons: regular / thin / light / bold / fill / duotone
- ✅ **Smart Asset Sizing**: Automatic multi-size generation and matching
  - **Avatars**: Auto-selects closest size from 16×16, 20×20, 24×24, 28×28, 32×32, 40×40, 48×48, 56×56, 64×64, 80×80, 128×128, 256×256, 512×512 (default: 32×32)
  - **Backgrounds**: Auto-selects closest width from 320, 640, 1024, 1920 (default: 1024px, height auto)
  - **Images**: Auto-selects closest width from 160, 320, 640, 1024 (default: 320px, height auto)
  - **Illustrations**: Auto-selects closest width from 160, 320, 640, 1024 (default: 320px, height auto)
- ✅ Complete TypeScript types with JSX/TSX IntelliSense
- ✅ Unified export entry for tree-shaking and on-demand imports
- ✅ No namespaces - direct component exports
- ✅ Support for both original and normalized naming

### 📦 Installation

```bash
npm install @snowui-design-system/resource-react
# or
pnpm add @snowui-design-system/resource-react
# or
yarn add @snowui-design-system/resource-react
```

**Important**: Only install `resource-react`. `resource-core` will be automatically installed as a dependency.

### 🚀 Usage Examples

#### Icons

```tsx
import { FourLeafClover } from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      {/* Default weight (regular) */}
      <FourLeafClover size={24} />
      
      {/* Specify weight */}
      <FourLeafClover size={24} weight="bold" />
      
      {/* Set color with className */}
      <FourLeafClover size={24} className="text-blue-500" />
    </div>
  );
}
```

#### Avatars with Auto Size Matching

```tsx
import { AvatarByewind } from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      {/* Uses default 32×32 */}
      <AvatarByewind size={32} className="rounded-full" />
      
      {/* Auto-selects closest size (64×64) */}
      <AvatarByewind size={60} className="rounded-full" />
      
      {/* Auto-selects closest size (128×128) */}
      <AvatarByewind size={100} className="rounded-full" />
    </div>
  );
}
```

#### Backgrounds with Auto Width Matching

```tsx
import { Gradient01 } from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      {/* Uses default 1024px width */}
      <Gradient01 width={1024} />
      
      {/* Auto-selects closest width (640px) */}
      <Gradient01 width={500} />
      
      {/* Auto-selects closest width (1920px) */}
      <Gradient01 width={1500} />
    </div>
  );
}
```

#### Other Assets

```tsx
import { 
  CursorsBeachball, 
  FaceBlowingKiss, 
  Illustration01, 
  Image01, 
  Google 
} from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      <CursorsBeachball size={48} />
      <FaceBlowingKiss size={48} />
      <Illustration01 width={320} />
      <Image01 width={320} />
      <Google size={48} />
    </div>
  );
}
```

### 📋 Component Props

#### Icon Props

```typescript
interface IconProps {
  size?: number | string;        // Icon size (number = pixels, string = CSS value)
  weight?: 'regular' | 'thin' | 'light' | 'bold' | 'fill' | 'duotone';
  className?: string;             // CSS class name (for styling like color)
}
```

#### Asset Props (Avatar/Background/Cursor/Emoji/Illustration/Image/Logo)

```typescript
interface AvatarProps {
  size?: number;                  // Size (sets both width and height)
  width?: number;                 // Width
  height?: number;                // Height
  className?: string;             // CSS class name
}
```

**Note**: For bitmaps (avatars, backgrounds, images, illustrations), the component automatically selects the closest available size when a non-standard size is requested.

### 🛠️ Development

#### Regenerating Components

If you need to regenerate components (e.g., after updating `@snowui-design-system/resource-core`):

```bash
# Install dependencies first
npm install

# Regenerate components
npm run generate

# Build the package
npm run build
```

The generate script will automatically detect whether you're in a monorepo or standalone repository:
- **Monorepo**: Uses `../resource/core` (if available)
- **Standalone**: Uses `node_modules/@snowui-design-system/resource-core`

**Note**: The generated components in `src/` are already included in the repository, so you typically don't need to run `generate` unless you're modifying the generation logic or updating resource-core.

### 🔗 Related Projects

- **[resource-core](https://github.com/snowui/resource-core)** - Core resource package
- **[example](https://github.com/snowui/example)** - Example website
- **[Live Demo](https://snowui.github.io/example)** - View the example website

### 📚 Documentation

- [Core Package Documentation](../core/README.md)
- [Resource Package Documentation](../README.md)

### 📄 License

MIT

---

## 中文

轻量的 React 组件包，通过从 `@snowui-design-system/resource-core` 中的已处理素材自动生成图标、头像、背景等组件，开箱即用，支持 TypeScript 与 Tree-shaking。

### ✨ 功能特点

- ✅ 从核心资源包自动生成 React 组件（Icon/Avatar/Background/Cursor/Emoji/Illustration/Image/Logo）
- ✅ 支持多权重图标：regular / thin / light / bold / fill / duotone
- ✅ **智能素材尺寸**：自动多尺寸生成和匹配
  - **头像**：从 16×16, 20×20, 24×24, 28×28, 32×32, 40×40, 48×48, 56×56, 64×64, 80×80, 128×128, 256×256, 512×512 中自动选择最接近的尺寸（默认：32×32）
  - **背景**：从 320, 640, 1024, 1920 中自动选择最接近的宽度（默认：1024px，高度自适应）
  - **图片**：从 160, 320, 640, 1024 中自动选择最接近的宽度（默认：320px，高度自适应）
  - **插画**：从 160, 320, 640, 1024 中自动选择最接近的宽度（默认：320px，高度自适应）
- ✅ TypeScript 类型完善，支持 JSX/TSX 智能提示
- ✅ 生成统一导出入口，便于按需引入与 Tree-shaking
- ✅ 无命名空间，直接导出所有组件
- ✅ 支持通过原始名称和规范名称引用图标

### 📦 安装

```bash
npm install @snowui-design-system/resource-react
# 或
pnpm add @snowui-design-system/resource-react
# 或
yarn add @snowui-design-system/resource-react
```

**重要提示**：只需安装 `resource-react` 包即可，`resource-core` 会自动作为依赖安装。

### 🚀 使用示例

#### 图标

```tsx
import { FourLeafClover } from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      {/* 默认权重（regular） */}
      <FourLeafClover size={24} />
      
      {/* 指定权重 */}
      <FourLeafClover size={24} weight="bold" />
      
      {/* 使用 className 设置颜色 */}
      <FourLeafClover size={24} className="text-blue-500" />
    </div>
  );
}
```

#### 头像（自动尺寸匹配）

```tsx
import { AvatarByewind } from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      {/* 使用默认 32×32 */}
      <AvatarByewind size={32} className="rounded-full" />
      
      {/* 自动选择最接近的尺寸（64×64） */}
      <AvatarByewind size={60} className="rounded-full" />
      
      {/* 自动选择最接近的尺寸（128×128） */}
      <AvatarByewind size={100} className="rounded-full" />
    </div>
  );
}
```

#### 背景（自动宽度匹配）

```tsx
import { Gradient01 } from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      {/* 使用默认 1024px 宽度 */}
      <Gradient01 width={1024} />
      
      {/* 自动选择最接近的宽度（640px） */}
      <Gradient01 width={500} />
      
      {/* 自动选择最接近的宽度（1920px） */}
      <Gradient01 width={1500} />
    </div>
  );
}
```

#### 其他素材

```tsx
import { 
  CursorsBeachball, 
  FaceBlowingKiss, 
  Illustration01, 
  Image01, 
  Google 
} from '@snowui-design-system/resource-react';

export default function Demo() {
  return (
    <div>
      <CursorsBeachball size={48} />
      <FaceBlowingKiss size={48} />
      <Illustration01 width={320} />
      <Image01 width={320} />
      <Google size={48} />
    </div>
  );
}
```

### 📋 组件 Props

#### 图标组件 Props

```typescript
interface IconProps {
  size?: number | string;        // 图标尺寸（数字为像素，字符串为 CSS 值）
  weight?: 'regular' | 'thin' | 'light' | 'bold' | 'fill' | 'duotone';
  className?: string;             // CSS 类名（用于设置颜色等样式）
}
```

#### 素材组件 Props（Avatar/Background/Cursor/Emoji/Illustration/Image/Logo）

```typescript
interface AvatarProps {
  size?: number;                  // 尺寸（同时设置 width 和 height）
  width?: number;                 // 宽度
  height?: number;                // 高度
  className?: string;             // CSS 类名
}
```

**注意**：对于位图（头像、背景、图片、插画），当请求非标准尺寸时，组件会自动选择最接近的可用尺寸。

### 🛠️ 开发

#### 重新生成组件

如果需要重新生成组件（例如，更新了 `@snowui-design-system/resource-core` 后）：

```bash
# 先安装依赖
npm install

# 重新生成组件
npm run generate

# 构建包
npm run build
```

生成脚本会自动检测你是在 monorepo 还是独立仓库中：
- **Monorepo**：使用 `../resource/core`（如果存在）
- **独立仓库**：使用 `node_modules/@snowui-design-system/resource-core`

**注意**：`src/` 中的组件已经包含在仓库中，通常不需要运行 `generate`，除非你正在修改生成逻辑或更新 resource-core。

### 🔗 相关项目

- **[resource-core](https://github.com/snowui/resource-core)** - 核心资源包
- **[example](https://github.com/snowui/example)** - 示例网站
- **[在线演示](https://snowui.github.io/example)** - 查看示例网站

### 📚 文档

- [核心包文档](../core/README.md)
- [资源包文档](../README.md)

### 📄 许可证

MIT
