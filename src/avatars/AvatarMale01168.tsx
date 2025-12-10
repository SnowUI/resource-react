import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale01168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-168.jpg';
export const AvatarMale01168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale01168Src;
  return (
    <img
      src={AvatarMale01168Src}
      alt="AvatarMale01168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale01168;