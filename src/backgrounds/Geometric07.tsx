import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import Geometric07Src from '@snowui-design-system/resource-base/assets/backgrounds/geometric-07-1024.jpg';
import Geometric07Src320 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-07-320.jpg';
import Geometric07Src640 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-07-640.jpg';
import Geometric07Src1920 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-07-1920.jpg';
const Geometric07WidthMap = {
    320: Geometric07Src320,
    640: Geometric07Src640,
    1024: Geometric07Src,
    1920: Geometric07Src1920,
} as const;
const Geometric07AvailableWidths = [320, 640, 1024, 1920] as const;

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
export const Geometric07: React.FC<BackgroundProps> = ({ width = 1024, height, ...rest }) => {
  const resolvedWidth = width ?? 1024;
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  const closestWidth = findClosestWidth(resolvedWidth, Geometric07AvailableWidths);
  const imageSrc = Geometric07WidthMap[closestWidth as keyof typeof Geometric07WidthMap] ?? Geometric07Src;
  return (
    <img
      src={imageSrc}
      alt="Geometric07"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Geometric07;