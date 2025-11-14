import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale01Src from '@snowui-design-system/resource-core/assets/avatars/avatar-male-01.jpg';

export const AvatarMale01: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarMale01Src}
      alt="AvatarMale01"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarMale01;
