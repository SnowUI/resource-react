import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Avatar3d03192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-192.jpg';
export const Avatar3d03192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = Avatar3d03192Src;
  return (
    <img
      src={Avatar3d03192Src}
      alt="Avatar3d03192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Avatar3d03192;