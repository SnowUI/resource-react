import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale01Src from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01.jpg';

export const AvatarFemale01: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarFemale01Src}
      alt="AvatarFemale01"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarFemale01;
