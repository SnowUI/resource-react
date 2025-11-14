import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import GradientSrc from '@snowui-design-system/resource-core/assets/backgrounds/gradient-01.jpg';
import GradientSrc1 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-01.jpg';
import GradientSrc2 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-02.jpg';
import GradientSrc3 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-03.jpg';
import GradientSrc4 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-04.jpg';
import GradientSrc5 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-05.jpg';
import GradientSrc6 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-06.jpg';
import GradientSrc7 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-07.jpg';
import GradientSrc8 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-08.jpg';
import GradientSrc9 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-09.jpg';
import GradientSrc10 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-10.jpg';
import GradientSrc11 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-11.jpg';
import GradientSrc12 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-12.jpg';
import GradientSrc13 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-13.jpg';
import GradientSrc14 from '@snowui-design-system/resource-core/assets/backgrounds/gradient-14.jpg';
const GradientWidthMap = {
    1: GradientSrc1,
    2: GradientSrc2,
    3: GradientSrc3,
    4: GradientSrc4,
    5: GradientSrc5,
    6: GradientSrc6,
    7: GradientSrc7,
    8: GradientSrc8,
    9: GradientSrc9,
    10: GradientSrc10,
    11: GradientSrc11,
    12: GradientSrc12,
    13: GradientSrc13,
    14: GradientSrc14,
} as const;
const GradientAvailableWidths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] as const;

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
export const Gradient: React.FC<BackgroundProps> = ({ width = 1024, height, ...rest }) => {
  const resolvedWidth = width ?? 1024;
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  const closestWidth = findClosestWidth(resolvedWidth, GradientAvailableWidths);
  const imageSrc = GradientWidthMap[closestWidth as keyof typeof GradientWidthMap] ?? GradientSrc;
  return (
    <img
      src={imageSrc}
      alt="Gradient"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Gradient;