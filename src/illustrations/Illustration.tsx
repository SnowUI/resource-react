import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import IllustrationSrc from '@snowui-design-system/resource-core/assets/illustrations/illustration-01.png';
import IllustrationSrc1 from '@snowui-design-system/resource-core/assets/illustrations/illustration-01.png';
import IllustrationSrc2 from '@snowui-design-system/resource-core/assets/illustrations/illustration-02.png';
import IllustrationSrc3 from '@snowui-design-system/resource-core/assets/illustrations/illustration-03.png';
import IllustrationSrc4 from '@snowui-design-system/resource-core/assets/illustrations/illustration-04.png';
import IllustrationSrc5 from '@snowui-design-system/resource-core/assets/illustrations/illustration-05.png';
import IllustrationSrc6 from '@snowui-design-system/resource-core/assets/illustrations/illustration-06.png';
import IllustrationSrc7 from '@snowui-design-system/resource-core/assets/illustrations/illustration-07.png';
import IllustrationSrc8 from '@snowui-design-system/resource-core/assets/illustrations/illustration-08.png';
import IllustrationSrc9 from '@snowui-design-system/resource-core/assets/illustrations/illustration-09.png';
import IllustrationSrc10 from '@snowui-design-system/resource-core/assets/illustrations/illustration-10.png';
import IllustrationSrc11 from '@snowui-design-system/resource-core/assets/illustrations/illustration-11.png';
import IllustrationSrc12 from '@snowui-design-system/resource-core/assets/illustrations/illustration-12.png';
import IllustrationSrc13 from '@snowui-design-system/resource-core/assets/illustrations/illustration-13.png';
import IllustrationSrc14 from '@snowui-design-system/resource-core/assets/illustrations/illustration-14.png';
import IllustrationSrc15 from '@snowui-design-system/resource-core/assets/illustrations/illustration-15.png';
import IllustrationSrc16 from '@snowui-design-system/resource-core/assets/illustrations/illustration-16.png';
import IllustrationSrc17 from '@snowui-design-system/resource-core/assets/illustrations/illustration-17.png';
import IllustrationSrc18 from '@snowui-design-system/resource-core/assets/illustrations/illustration-18.png';
import IllustrationSrc19 from '@snowui-design-system/resource-core/assets/illustrations/illustration-19.png';
import IllustrationSrc20 from '@snowui-design-system/resource-core/assets/illustrations/illustration-20.png';
import IllustrationSrc21 from '@snowui-design-system/resource-core/assets/illustrations/illustration-21.png';
import IllustrationSrc22 from '@snowui-design-system/resource-core/assets/illustrations/illustration-22.png';
import IllustrationSrc23 from '@snowui-design-system/resource-core/assets/illustrations/illustration-23.png';
import IllustrationSrc24 from '@snowui-design-system/resource-core/assets/illustrations/illustration-24.png';
import IllustrationSrc25 from '@snowui-design-system/resource-core/assets/illustrations/illustration-25.png';
import IllustrationSrc26 from '@snowui-design-system/resource-core/assets/illustrations/illustration-26.png';
import IllustrationSrc27 from '@snowui-design-system/resource-core/assets/illustrations/illustration-27.png';
import IllustrationSrc28 from '@snowui-design-system/resource-core/assets/illustrations/illustration-28.png';
const IllustrationWidthMap = {
    1: IllustrationSrc1,
    2: IllustrationSrc2,
    3: IllustrationSrc3,
    4: IllustrationSrc4,
    5: IllustrationSrc5,
    6: IllustrationSrc6,
    7: IllustrationSrc7,
    8: IllustrationSrc8,
    9: IllustrationSrc9,
    10: IllustrationSrc10,
    11: IllustrationSrc11,
    12: IllustrationSrc12,
    13: IllustrationSrc13,
    14: IllustrationSrc14,
    15: IllustrationSrc15,
    16: IllustrationSrc16,
    17: IllustrationSrc17,
    18: IllustrationSrc18,
    19: IllustrationSrc19,
    20: IllustrationSrc20,
    21: IllustrationSrc21,
    22: IllustrationSrc22,
    23: IllustrationSrc23,
    24: IllustrationSrc24,
    25: IllustrationSrc25,
    26: IllustrationSrc26,
    27: IllustrationSrc27,
    28: IllustrationSrc28,
} as const;
const IllustrationAvailableWidths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28] as const;

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