import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Avatar3dSrc from '@snowui-design-system/resource-core/assets/avatars/avatar-3d-01.jpg';
import Avatar3dSrc1 from '@snowui-design-system/resource-core/assets/avatars/avatar-3d-01.jpg';
import Avatar3dSrc2 from '@snowui-design-system/resource-core/assets/avatars/avatar-3d-02.jpg';
import Avatar3dSrc3 from '@snowui-design-system/resource-core/assets/avatars/avatar-3d-03.jpg';
import Avatar3dSrc4 from '@snowui-design-system/resource-core/assets/avatars/avatar-3d-04.jpg';
const Avatar3dSizeMap = {
    1: Avatar3dSrc1,
    2: Avatar3dSrc2,
    3: Avatar3dSrc3,
    4: Avatar3dSrc4,
} as const;
const Avatar3dAvailableSizes = [1, 2, 3, 4] as const;

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
export const Avatar3d: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  const closestSize = findClosestSize(resolvedWidth, Avatar3dAvailableSizes);
  const imageSrc = Avatar3dSizeMap[closestSize as keyof typeof Avatar3dSizeMap] ?? Avatar3dSrc;
  return (
    <img
      src={imageSrc}
      alt="Avatar3d"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Avatar3d;