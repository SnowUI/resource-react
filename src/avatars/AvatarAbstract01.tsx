import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract01Src from '@snowui-design-system/resource-core/assets/avatars/avatar-abstract-01.jpg';

export const AvatarAbstract01: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarAbstract01Src}
      alt="AvatarAbstract01"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarAbstract01;
