import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale02Src from '@snowui-design-system/resource-core/assets/avatars/avatar-female-02.jpg';

export const AvatarFemale02: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarFemale02Src}
      alt="AvatarFemale02"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarFemale02;
