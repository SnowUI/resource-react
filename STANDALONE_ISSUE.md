# 独立仓库问题分析

## ⚠️ 问题

如果 `resource/react` 作为独立仓库推送到 GitHub，其他用户克隆后可能会遇到以下问题：

### 1. `generate` 脚本路径不存在

**当前配置**：
```json
// package.json
{
  "scripts": {
    "generate": "tsx ../../scripts/generate-react.ts"
  }
}
```

**问题**：
- 路径 `../../scripts/generate-react.ts` 在独立仓库中不存在
- 用户无法运行 `npm run generate` 来重新生成组件

### 2. 用户使用场景分析

#### 场景 A: 普通用户（使用已发布的 npm 包）
```bash
npm install @snowui-design-system/resource-react
```
- ✅ **不受影响**：直接使用已构建的包，不需要生成脚本
- ✅ 可以正常使用所有组件

#### 场景 B: 开发者（克隆仓库进行开发）
```bash
git clone https://github.com/snowui/resource-react.git
cd resource-react
npm install
npm run build
```
- ⚠️ **可能受影响**：
  - 如果 `src/` 中已有生成的组件 → ✅ 可以正常构建
  - 如果需要重新生成组件 → ❌ 无法运行 `npm run generate`

#### 场景 C: 贡献者（修改组件或添加新素材）
```bash
git clone https://github.com/snowui/resource-react.git
# 修改了 resource-core，需要重新生成组件
npm run generate  # ❌ 失败：找不到脚本
```

---

## ✅ 解决方案

### 方案 1: 将生成脚本复制到 `resource/react`（推荐）

**优点**：
- ✅ 完全自包含，不依赖外部脚本
- ✅ 用户可以独立运行生成脚本
- ✅ 符合独立仓库的最佳实践

**实施步骤**：
1. 在 `resource/react` 中创建 `scripts/` 目录
2. 复制 `scripts/generate-react.ts` 和 `scripts/utils/` 到 `resource/react/scripts/`
3. 更新 `package.json` 中的路径：
   ```json
   {
     "scripts": {
       "generate": "tsx scripts/generate-react.ts"
     }
   }
   ```

### 方案 2: 将生成脚本作为 npm 包发布

**优点**：
- ✅ 可以版本化管理生成脚本
- ✅ 多个包可以共享同一个生成工具

**缺点**：
- ❌ 增加维护成本
- ❌ 可能过度设计

### 方案 3: 在 README 中说明（不推荐）

**说明**：
- 如果用户需要重新生成组件，需要从 monorepo 中获取脚本
- 或者提供单独的脚本仓库

**缺点**：
- ❌ 用户体验差
- ❌ 增加使用门槛

---

## 🎯 推荐方案

**强烈推荐方案 1**：将生成脚本复制到 `resource/react/scripts/`

### 理由：
1. ✅ **自包含**：独立仓库应该包含所有必要的构建工具
2. ✅ **用户体验好**：用户可以直接运行 `npm run generate`
3. ✅ **符合最佳实践**：每个包管理自己的构建脚本
4. ✅ **便于贡献**：贡献者可以轻松地重新生成组件

### 注意事项：
- 虽然会有代码重复（与根目录的 `scripts/`），但对于独立仓库来说，这是可以接受的
- 如果未来需要更新生成脚本，需要同步更新两个地方
- 可以在 README 中说明：如果需要修改生成逻辑，请同时更新 monorepo 中的脚本

---

## 📋 实施检查清单

- [ ] 创建 `resource/react/scripts/` 目录
- [ ] 复制 `generate-react.ts` 到 `resource/react/scripts/`
- [ ] 复制 `scripts/utils/` 到 `resource/react/scripts/utils/`
- [ ] 更新 `package.json` 中的 `generate` 脚本路径
- [ ] 更新 `generate-react.ts` 中的路径引用（如果需要）
- [ ] 测试 `npm run generate` 是否正常工作
- [ ] 更新 README，说明如何重新生成组件
- [ ] 在 `.gitignore` 中确保生成的组件文件被提交（或说明生成流程）

---

## 🔍 当前状态检查

### 检查 1: `src/` 中是否已有生成的组件？

如果 `src/icons/`、`src/avatars/` 等目录中已有 `.tsx` 文件：
- ✅ 用户可以正常使用和构建
- ⚠️ 但无法重新生成组件

### 检查 2: 用户是否需要运行 `generate`？

**通常不需要**，因为：
- 组件已经生成并提交到仓库
- 用户只需要 `npm install` 和 `npm run build`

**需要运行的情况**：
- 用户修改了 `resource-core` 并需要重新生成
- 用户想要添加新的素材并生成组件
- 用户想要修改生成逻辑

---

## 💡 建议

1. **立即行动**：将生成脚本复制到 `resource/react/scripts/`
2. **文档说明**：在 README 中说明生成脚本的位置和使用方法
3. **同步策略**：如果修改了生成逻辑，需要同步更新两个地方的脚本

