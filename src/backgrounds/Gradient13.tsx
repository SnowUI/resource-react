import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import Gradient13Src from '@snowui-design-system/resource-base/assets/backgrounds/gradient-13-1024.jpg';
import Gradient13Src320 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-13-320.jpg';
import Gradient13Src640 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-13-640.jpg';
import Gradient13Src1920 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-13-1920.jpg';
const Gradient13WidthMap = {
    320: Gradient13Src320,
    640: Gradient13Src640,
    1024: Gradient13Src,
    1920: Gradient13Src1920,
} as const;
const Gradient13AvailableWidths = [320, 640, 1024, 1920] as const;

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
export const Gradient13: React.FC<BackgroundProps> = ({ width = 1024, height, ...rest }) => {
  const resolvedWidth = width ?? 1024;
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  const closestWidth = findClosestWidth(resolvedWidth, Gradient13AvailableWidths);
  const imageSrc = Gradient13WidthMap[closestWidth as keyof typeof Gradient13WidthMap] ?? Gradient13Src;
  return (
    <img
      src={imageSrc}
      alt="Gradient13"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Gradient13;