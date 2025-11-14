import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract02Src from '@snowui-design-system/resource-core/assets/avatars/avatar-abstract-02.jpg';

export const AvatarAbstract02: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarAbstract02Src}
      alt="AvatarAbstract02"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarAbstract02;
