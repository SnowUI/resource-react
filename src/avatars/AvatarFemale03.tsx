import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale03Src from '@snowui-design-system/resource-core/assets/avatars/avatar-female-03.jpg';

export const AvatarFemale03: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarFemale03Src}
      alt="AvatarFemale03"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarFemale03;
