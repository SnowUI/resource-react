import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import MinimalSrc from '@snowui-design-system/resource-core/assets/backgrounds/minimal-01.jpg';
import MinimalSrc1 from '@snowui-design-system/resource-core/assets/backgrounds/minimal-01.jpg';
import MinimalSrc2 from '@snowui-design-system/resource-core/assets/backgrounds/minimal-02.jpg';
import MinimalSrc3 from '@snowui-design-system/resource-core/assets/backgrounds/minimal-03.jpg';
const MinimalWidthMap = {
    1: MinimalSrc1,
    2: MinimalSrc2,
    3: MinimalSrc3,
} as const;
const MinimalAvailableWidths = [1, 2, 3] as const;

  // 查找最接近的可用宽度
  const findClosestWidth = (target: number, available: number[]): number => {
    if (available.length === 0) return target;
    // 如果目标宽度在可用宽度中，直接返回
    if (available.includes(target)) return target;
    // 找到最接近的宽度
    let closest = available[0];
    let minDiff = Math.abs(target - closest);
    for (const width of available) {
      const diff = Math.abs(target - width);
      if (diff < minDiff) {
        minDiff = diff;
        closest = width;
      }
    }
    return closest;
  };
export const Minimal: React.FC<BackgroundProps> = ({ width = 1024, height, ...rest }) => {
  const resolvedWidth = width ?? 1024;
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  const closestWidth = findClosestWidth(resolvedWidth, MinimalAvailableWidths);
  const imageSrc = MinimalWidthMap[closestWidth as keyof typeof MinimalWidthMap] ?? MinimalSrc;
  return (
    <img
      src={imageSrc}
      alt="Minimal"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Minimal;