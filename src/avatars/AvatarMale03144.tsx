import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale03144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-144.jpg';
export const AvatarMale03144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale03144Src;
  return (
    <img
      src={AvatarMale03144Src}
      alt="AvatarMale03144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale03144;