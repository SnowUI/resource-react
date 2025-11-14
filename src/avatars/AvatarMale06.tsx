import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale06Src from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06.jpg';

export const AvatarMale06: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarMale06Src}
      alt="AvatarMale06"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarMale06;
