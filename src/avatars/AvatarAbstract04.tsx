import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract04Src from '@snowui-design-system/resource-core/assets/avatars/avatar-abstract-04.jpg';

export const AvatarAbstract04: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarAbstract04Src}
      alt="AvatarAbstract04"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarAbstract04;
