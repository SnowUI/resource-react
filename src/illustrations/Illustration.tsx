import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import IllustrationSrc from '@snowui-design-system/resource-core/assets/illustrations/illustration-16.png';
import IllustrationSrc16 from '@snowui-design-system/resource-core/assets/illustrations/illustration-16.png';
import IllustrationSrc20 from '@snowui-design-system/resource-core/assets/illustrations/illustration-20.png';
import IllustrationSrc24 from '@snowui-design-system/resource-core/assets/illustrations/illustration-24.png';
import IllustrationSrc28 from '@snowui-design-system/resource-core/assets/illustrations/illustration-28.png';
const IllustrationWidthMap = {
    16: IllustrationSrc16,
    20: IllustrationSrc20,
    24: IllustrationSrc24,
    28: IllustrationSrc28,
} as const;
const IllustrationAvailableWidths = [16, 20, 24, 28] as const;

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
export const Illustration: React.FC<BackgroundProps> = ({ width = 320, height, ...rest }) => {
  const resolvedWidth = width ?? 320;
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  const closestWidth = findClosestWidth(resolvedWidth, IllustrationAvailableWidths);
  const imageSrc = IllustrationWidthMap[closestWidth as keyof typeof IllustrationWidthMap] ?? IllustrationSrc;
  return (
    <img
      src={imageSrc}
      alt="Illustration"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Illustration;