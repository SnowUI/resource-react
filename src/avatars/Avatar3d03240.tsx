import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Avatar3d03240Src from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-240.jpg';
export const Avatar3d03240: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = Avatar3d03240Src;
  return (
    <img
      src={Avatar3d03240Src}
      alt="Avatar3d03240"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Avatar3d03240;