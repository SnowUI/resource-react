import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemaleSrc from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01.jpg';
import AvatarFemaleSrc1 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01.jpg';
import AvatarFemaleSrc2 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-02.jpg';
import AvatarFemaleSrc3 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-03.jpg';
import AvatarFemaleSrc4 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-04.jpg';
import AvatarFemaleSrc5 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05.jpg';
import AvatarFemaleSrc6 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-06.jpg';
const AvatarFemaleSizeMap = {
    1: AvatarFemaleSrc1,
    2: AvatarFemaleSrc2,
    3: AvatarFemaleSrc3,
    4: AvatarFemaleSrc4,
    5: AvatarFemaleSrc5,
    6: AvatarFemaleSrc6,
} as const;
const AvatarFemaleAvailableSizes = [1, 2, 3, 4, 5, 6] as const;

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
export const AvatarFemale: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  const closestSize = findClosestSize(resolvedWidth, AvatarFemaleAvailableSizes);
  const imageSrc = AvatarFemaleSizeMap[closestSize as keyof typeof AvatarFemaleSizeMap] ?? AvatarFemaleSrc;
  return (
    <img
      src={imageSrc}
      alt="AvatarFemale"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale;