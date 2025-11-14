import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import Illustration20Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-20-320.png';
import Illustration20Src160 from '@snowui-design-system/resource-core/assets/illustrations/illustration-20-160.png';
import Illustration20Src640 from '@snowui-design-system/resource-core/assets/illustrations/illustration-20-640.png';
import Illustration20Src1024 from '@snowui-design-system/resource-core/assets/illustrations/illustration-20-1024.png';
const Illustration20WidthMap = {
    160: Illustration20Src160,
    320: Illustration20Src,
    640: Illustration20Src640,
    1024: Illustration20Src1024,
} as const;
const Illustration20AvailableWidths = [160, 320, 640, 1024] as const;

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
export const Illustration20: React.FC<BackgroundProps> = ({ width = 320, height, ...rest }) => {
  const resolvedWidth = width ?? 320;
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  const closestWidth = findClosestWidth(resolvedWidth, Illustration20AvailableWidths);
  const imageSrc = Illustration20WidthMap[closestWidth as keyof typeof Illustration20WidthMap] ?? Illustration20Src;
  return (
    <img
      src={imageSrc}
      alt="Illustration20"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Illustration20;