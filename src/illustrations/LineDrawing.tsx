import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import LineDrawingSrc from '@snowui-design-system/resource-core/assets/illustrations/line-drawing-01.svg';
import LineDrawingSrc1 from '@snowui-design-system/resource-core/assets/illustrations/line-drawing-01.svg';
import LineDrawingSrc2 from '@snowui-design-system/resource-core/assets/illustrations/line-drawing-02.svg';
import LineDrawingSrc3 from '@snowui-design-system/resource-core/assets/illustrations/line-drawing-03.svg';
const LineDrawingWidthMap = {
    1: LineDrawingSrc1,
    2: LineDrawingSrc2,
    3: LineDrawingSrc3,
} as const;
const LineDrawingAvailableWidths = [1, 2, 3] as const;

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
export const LineDrawing: React.FC<BackgroundProps> = ({ width = 320, height, ...rest }) => {
  const resolvedWidth = width ?? 320;
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  const closestWidth = findClosestWidth(resolvedWidth, LineDrawingAvailableWidths);
  const imageSrc = LineDrawingWidthMap[closestWidth as keyof typeof LineDrawingWidthMap] ?? LineDrawingSrc;
  return (
    <img
      src={imageSrc}
      alt="LineDrawing"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default LineDrawing;