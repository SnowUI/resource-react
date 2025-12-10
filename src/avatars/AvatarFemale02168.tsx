import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale02168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-168.jpg';
export const AvatarFemale02168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale02168Src;
  return (
    <img
      src={AvatarFemale02168Src}
      alt="AvatarFemale02168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale02168;