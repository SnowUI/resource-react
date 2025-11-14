import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Avatar3d02Src from '@snowui-design-system/resource-core/assets/avatars/avatar-3d-02.jpg';

export const Avatar3d02: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Avatar3d02Src}
      alt="Avatar3d02"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Avatar3d02;
