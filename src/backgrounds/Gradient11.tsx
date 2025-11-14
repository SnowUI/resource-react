import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import Gradient11Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-11-1024.jpg';
import Gradient11Src320 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-11-320.jpg';
import Gradient11Src640 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-11-640.jpg';
import Gradient11Src1920 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-11-1920.jpg';
const Gradient11WidthMap = {
    320: Gradient11Src320,
    640: Gradient11Src640,
    1024: Gradient11Src,
    1920: Gradient11Src1920,
} as const;
const Gradient11AvailableWidths = [320, 640, 1024, 1920] as const;

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
export const Gradient11: React.FC<BackgroundProps> = ({ width = 1024, height, ...rest }) => {
  const resolvedWidth = width ?? 1024;
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  const closestWidth = findClosestWidth(resolvedWidth, Gradient11AvailableWidths);
  const imageSrc = Gradient11WidthMap[closestWidth as keyof typeof Gradient11WidthMap] ?? Gradient11Src;
  return (
    <img
      src={imageSrc}
      alt="Gradient11"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Gradient11;