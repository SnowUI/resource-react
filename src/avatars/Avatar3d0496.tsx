import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Avatar3d0496Src from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-96.jpg';
export const Avatar3d0496: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = Avatar3d0496Src;
  return (
    <img
      src={Avatar3d0496Src}
      alt="Avatar3d0496"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Avatar3d0496;