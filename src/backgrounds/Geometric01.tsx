import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import Geometric01Src from '@snowui-design-system/resource-core/assets/backgrounds/geometric-01-1024.jpg';
import Geometric01Src320 from '@snowui-design-system/resource-core/assets/backgrounds/geometric-01-320.jpg';
import Geometric01Src640 from '@snowui-design-system/resource-core/assets/backgrounds/geometric-01-640.jpg';
import Geometric01Src1920 from '@snowui-design-system/resource-core/assets/backgrounds/geometric-01-1920.jpg';
const Geometric01WidthMap = {
    320: Geometric01Src320,
    640: Geometric01Src640,
    1024: Geometric01Src,
    1920: Geometric01Src1920,
} as const;
const Geometric01AvailableWidths = [320, 640, 1024, 1920] as const;

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
export const Geometric01: React.FC<BackgroundProps> = ({ width = 1024, height, ...rest }) => {
  const resolvedWidth = width ?? 1024;
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  const closestWidth = findClosestWidth(resolvedWidth, Geometric01AvailableWidths);
  const imageSrc = Geometric01WidthMap[closestWidth as keyof typeof Geometric01WidthMap] ?? Geometric01Src;
  return (
    <img
      src={imageSrc}
      alt="Geometric01"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Geometric01;