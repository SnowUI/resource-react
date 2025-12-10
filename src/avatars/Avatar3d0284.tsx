import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Avatar3d0284Src from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-84.jpg';
export const Avatar3d0284: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = Avatar3d0284Src;
  return (
    <img
      src={Avatar3d0284Src}
      alt="Avatar3d0284"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Avatar3d0284;