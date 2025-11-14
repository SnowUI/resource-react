import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale05Src from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05.jpg';

export const AvatarFemale05: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarFemale05Src}
      alt="AvatarFemale05"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarFemale05;
