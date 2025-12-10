import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale04168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-168.jpg';
export const AvatarMale04168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale04168Src;
  return (
    <img
      src={AvatarMale04168Src}
      alt="AvatarMale04168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale04168;