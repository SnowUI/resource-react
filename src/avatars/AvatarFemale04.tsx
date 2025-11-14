import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale04Src from '@snowui-design-system/resource-core/assets/avatars/avatar-female-04.jpg';

export const AvatarFemale04: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarFemale04Src}
      alt="AvatarFemale04"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarFemale04;
