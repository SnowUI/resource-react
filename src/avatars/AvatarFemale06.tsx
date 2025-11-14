import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale06Src from '@snowui-design-system/resource-core/assets/avatars/avatar-female-06.jpg';

export const AvatarFemale06: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarFemale06Src}
      alt="AvatarFemale06"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarFemale06;
