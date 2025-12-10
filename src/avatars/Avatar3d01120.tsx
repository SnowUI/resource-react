import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Avatar3d01120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-120.jpg';
export const Avatar3d01120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = Avatar3d01120Src;
  return (
    <img
      src={Avatar3d01120Src}
      alt="Avatar3d01120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Avatar3d01120;