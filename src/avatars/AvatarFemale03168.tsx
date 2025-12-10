import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale03168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-168.jpg';
export const AvatarFemale03168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale03168Src;
  return (
    <img
      src={AvatarFemale03168Src}
      alt="AvatarFemale03168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale03168;