import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Avatar3d01Src from '@snowui-design-system/resource-core/assets/avatars/avatar-3d-01.jpg';

export const Avatar3d01: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Avatar3d01Src}
      alt="Avatar3d01"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Avatar3d01;
