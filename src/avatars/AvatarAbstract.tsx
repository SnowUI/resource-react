import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstractSrc from '@snowui-design-system/resource-core/assets/avatars/avatar-abstract-01.jpg';
import AvatarAbstractSrc1 from '@snowui-design-system/resource-core/assets/avatars/avatar-abstract-01.jpg';
import AvatarAbstractSrc2 from '@snowui-design-system/resource-core/assets/avatars/avatar-abstract-02.jpg';
import AvatarAbstractSrc3 from '@snowui-design-system/resource-core/assets/avatars/avatar-abstract-03.jpg';
import AvatarAbstractSrc4 from '@snowui-design-system/resource-core/assets/avatars/avatar-abstract-04.jpg';
const AvatarAbstractSizeMap = {
    1: AvatarAbstractSrc1,
    2: AvatarAbstractSrc2,
    3: AvatarAbstractSrc3,
    4: AvatarAbstractSrc4,
} as const;
const AvatarAbstractAvailableSizes = [1, 2, 3, 4] as const;

  // 查找最接近的可用尺寸
  const findClosestSize = (target: number, available: readonly number[]): number => {
    if (available.length === 0) return target;
    // 如果目标尺寸在可用尺寸中，直接返回
    if (available.includes(target)) return target;
    // 找到最接近的尺寸
    let closest = available[0];
    let minDiff = Math.abs(target - closest);
    for (const size of available) {
      const diff = Math.abs(target - size);
      if (diff < minDiff) {
        minDiff = diff;
        closest = size;
      }
    }
    return closest;
  };
export const AvatarAbstract: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  const closestSize = findClosestSize(resolvedWidth, AvatarAbstractAvailableSizes);
  const imageSrc = AvatarAbstractSizeMap[closestSize as keyof typeof AvatarAbstractSizeMap] ?? AvatarAbstractSrc;
  return (
    <img
      src={imageSrc}
      alt="AvatarAbstract"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract;