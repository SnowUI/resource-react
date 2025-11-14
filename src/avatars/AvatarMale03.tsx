import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale03Src from '@snowui-design-system/resource-core/assets/avatars/avatar-male-03.jpg';

export const AvatarMale03: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarMale03Src}
      alt="AvatarMale03"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarMale03;
