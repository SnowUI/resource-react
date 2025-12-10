import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale02168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-168.jpg';
export const AvatarMale02168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale02168Src;
  return (
    <img
      src={AvatarMale02168Src}
      alt="AvatarMale02168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale02168;