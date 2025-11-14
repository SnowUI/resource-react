import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMaleSrc from '@snowui-design-system/resource-core/assets/avatars/avatar-male-01.jpg';
import AvatarMaleSrc1 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-01.jpg';
import AvatarMaleSrc2 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02.jpg';
import AvatarMaleSrc3 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-03.jpg';
import AvatarMaleSrc4 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04.jpg';
import AvatarMaleSrc5 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05.jpg';
import AvatarMaleSrc6 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06.jpg';
const AvatarMaleSizeMap = {
    1: AvatarMaleSrc1,
    2: AvatarMaleSrc2,
    3: AvatarMaleSrc3,
    4: AvatarMaleSrc4,
    5: AvatarMaleSrc5,
    6: AvatarMaleSrc6,
} as const;
const AvatarMaleAvailableSizes = [1, 2, 3, 4, 5, 6] as const;

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
export const AvatarMale: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  const closestSize = findClosestSize(resolvedWidth, AvatarMaleAvailableSizes);
  const imageSrc = AvatarMaleSizeMap[closestSize as keyof typeof AvatarMaleSizeMap] ?? AvatarMaleSrc;
  return (
    <img
      src={imageSrc}
      alt="AvatarMale"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale;