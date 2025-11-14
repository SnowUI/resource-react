import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale05Src from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05.jpg';

export const AvatarMale05: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarMale05Src}
      alt="AvatarMale05"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarMale05;
