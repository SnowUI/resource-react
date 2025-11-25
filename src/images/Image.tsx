import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import ImageSrc from '@snowui-design-system/resource-base/assets/images/image-01.png';
import ImageSrc1 from '@snowui-design-system/resource-base/assets/images/image-01.png';
const ImageWidthMap = {
    1: ImageSrc1,
} as const;
const ImageAvailableWidths = [1] as const;

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
export const Image: React.FC<BackgroundProps> = ({ width = 320, height, ...rest }) => {
  const resolvedWidth = width ?? 320;
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  const closestWidth = findClosestWidth(resolvedWidth, ImageAvailableWidths);
  const imageSrc = ImageWidthMap[closestWidth as keyof typeof ImageWidthMap] ?? ImageSrc;
  return (
    <img
      src={imageSrc}
      alt="Image"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Image;