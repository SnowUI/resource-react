import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import Geometric06Src from '@snowui-design-system/resource-base/assets/backgrounds/geometric-06-1024.jpg';
import Geometric06Src320 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-06-320.jpg';
import Geometric06Src640 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-06-640.jpg';
import Geometric06Src1920 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-06-1920.jpg';
const Geometric06WidthMap = {
    320: Geometric06Src320,
    640: Geometric06Src640,
    1024: Geometric06Src,
    1920: Geometric06Src1920,
} as const;
const Geometric06AvailableWidths = [320, 640, 1024, 1920] as const;

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
export const Geometric06: React.FC<BackgroundProps> = ({ width = 1024, height, ...rest }) => {
  const resolvedWidth = width ?? 1024;
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  const closestWidth = findClosestWidth(resolvedWidth, Geometric06AvailableWidths);
  const imageSrc = Geometric06WidthMap[closestWidth as keyof typeof Geometric06WidthMap] ?? Geometric06Src;
  return (
    <img
      src={imageSrc}
      alt="Geometric06"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Geometric06;