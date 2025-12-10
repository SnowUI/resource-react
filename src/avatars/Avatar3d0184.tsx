import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Avatar3d0184Src from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-84.jpg';
export const Avatar3d0184: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = Avatar3d0184Src;
  return (
    <img
      src={Avatar3d0184Src}
      alt="Avatar3d0184"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Avatar3d0184;