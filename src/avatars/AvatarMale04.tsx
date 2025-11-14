import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale04Src from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04.jpg';

export const AvatarMale04: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarMale04Src}
      alt="AvatarMale04"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarMale04;
