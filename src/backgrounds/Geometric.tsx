import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import GeometricSrc from '@snowui-design-system/resource-core/assets/backgrounds/geometric-01.jpg';
import GeometricSrc1 from '@snowui-design-system/resource-core/assets/backgrounds/geometric-01.jpg';
import GeometricSrc2 from '@snowui-design-system/resource-core/assets/backgrounds/geometric-02.jpg';
import GeometricSrc3 from '@snowui-design-system/resource-core/assets/backgrounds/geometric-03.jpg';
import GeometricSrc4 from '@snowui-design-system/resource-core/assets/backgrounds/geometric-04.jpg';
import GeometricSrc5 from '@snowui-design-system/resource-core/assets/backgrounds/geometric-05.jpg';
import GeometricSrc6 from '@snowui-design-system/resource-core/assets/backgrounds/geometric-06.jpg';
import GeometricSrc7 from '@snowui-design-system/resource-core/assets/backgrounds/geometric-07.jpg';
const GeometricWidthMap = {
    1: GeometricSrc1,
    2: GeometricSrc2,
    3: GeometricSrc3,
    4: GeometricSrc4,
    5: GeometricSrc5,
    6: GeometricSrc6,
    7: GeometricSrc7,
} as const;
const GeometricAvailableWidths = [1, 2, 3, 4, 5, 6, 7] as const;

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
export const Geometric: React.FC<BackgroundProps> = ({ width = 1024, height, ...rest }) => {
  const resolvedWidth = width ?? 1024;
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  const closestWidth = findClosestWidth(resolvedWidth, GeometricAvailableWidths);
  const imageSrc = GeometricWidthMap[closestWidth as keyof typeof GeometricWidthMap] ?? GeometricSrc;
  return (
    <img
      src={imageSrc}
      alt="Geometric"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Geometric;