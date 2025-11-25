import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract03Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-32.jpg';
import AvatarAbstract03Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-16.jpg';
import AvatarAbstract03Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-20.jpg';
import AvatarAbstract03Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-24.jpg';
import AvatarAbstract03Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-28.jpg';
import AvatarAbstract03Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-40.jpg';
import AvatarAbstract03Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-48.jpg';
import AvatarAbstract03Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-56.jpg';
import AvatarAbstract03Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-64.jpg';
import AvatarAbstract03Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-80.jpg';
import AvatarAbstract03Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-128.jpg';
import AvatarAbstract03Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-256.jpg';
import AvatarAbstract03Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-512.jpg';
const AvatarAbstract03SizeMap = {
    16: AvatarAbstract03Src16,
    20: AvatarAbstract03Src20,
    24: AvatarAbstract03Src24,
    28: AvatarAbstract03Src28,
    32: AvatarAbstract03Src,
    40: AvatarAbstract03Src40,
    48: AvatarAbstract03Src48,
    56: AvatarAbstract03Src56,
    64: AvatarAbstract03Src64,
    80: AvatarAbstract03Src80,
    128: AvatarAbstract03Src128,
    256: AvatarAbstract03Src256,
    512: AvatarAbstract03Src512,
} as const;
const AvatarAbstract03AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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
export const AvatarAbstract03: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  const closestSize = findClosestSize(resolvedWidth, AvatarAbstract03AvailableSizes);
  const imageSrc = AvatarAbstract03SizeMap[closestSize as keyof typeof AvatarAbstract03SizeMap] ?? AvatarAbstract03Src;
  return (
    <img
      src={imageSrc}
      alt="AvatarAbstract03"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract03;