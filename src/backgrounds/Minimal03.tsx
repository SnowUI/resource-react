import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import Minimal03Src from '@snowui-design-system/resource-core/assets/backgrounds/minimal-03-1024.jpg';
import Minimal03Src320 from '@snowui-design-system/resource-core/assets/backgrounds/minimal-03-320.jpg';
import Minimal03Src640 from '@snowui-design-system/resource-core/assets/backgrounds/minimal-03-640.jpg';
import Minimal03Src1920 from '@snowui-design-system/resource-core/assets/backgrounds/minimal-03-1920.jpg';
const Minimal03WidthMap = {
    320: Minimal03Src320,
    640: Minimal03Src640,
    1024: Minimal03Src,
    1920: Minimal03Src1920,
} as const;
const Minimal03AvailableWidths = [320, 640, 1024, 1920] as const;

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
export const Minimal03: React.FC<BackgroundProps> = ({ width = 1024, height, ...rest }) => {
  const resolvedWidth = width ?? 1024;
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  const closestWidth = findClosestWidth(resolvedWidth, Minimal03AvailableWidths);
  const imageSrc = Minimal03WidthMap[closestWidth as keyof typeof Minimal03WidthMap] ?? Minimal03Src;
  return (
    <img
      src={imageSrc}
      alt="Minimal03"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Minimal03;