import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Avatar3d03768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-768.jpg';
export const Avatar3d03768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = Avatar3d03768Src;
  return (
    <img
      src={Avatar3d03768Src}
      alt="Avatar3d03768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Avatar3d03768;