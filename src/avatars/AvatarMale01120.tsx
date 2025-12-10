import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale01120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-120.jpg';
export const AvatarMale01120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale01120Src;
  return (
    <img
      src={AvatarMale01120Src}
      alt="AvatarMale01120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale01120;