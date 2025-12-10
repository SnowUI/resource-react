import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale03168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-168.jpg';
export const AvatarMale03168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale03168Src;
  return (
    <img
      src={AvatarMale03168Src}
      alt="AvatarMale03168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale03168;