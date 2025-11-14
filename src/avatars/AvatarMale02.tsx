import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale02Src from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02.jpg';

export const AvatarMale02: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarMale02Src}
      alt="AvatarMale02"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarMale02;
