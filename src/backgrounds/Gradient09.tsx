import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import Gradient09Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-09-1024.jpg';
import Gradient09Src320 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-09-320.jpg';
import Gradient09Src640 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-09-640.jpg';
import Gradient09Src1920 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-09-1920.jpg';
const Gradient09WidthMap = {
    320: Gradient09Src320,
    640: Gradient09Src640,
    1024: Gradient09Src,
    1920: Gradient09Src1920,
} as const;
const Gradient09AvailableWidths = [320, 640, 1024, 1920] as const;

  // 查找最接近的可用宽度
  const findClosestWidth = (target: number, available: readonly number[]): number => {
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
export const Gradient09: React.FC<BackgroundProps> = ({ width = 1024, height, ...rest }) => {
  const resolvedWidth = width ?? 1024;
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  const closestWidth = findClosestWidth(resolvedWidth, Gradient09AvailableWidths);
  const imageSrc = Gradient09WidthMap[closestWidth as keyof typeof Gradient09WidthMap] ?? Gradient09Src;
  return (
    <img
      src={imageSrc}
      alt="Gradient09"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Gradient09;