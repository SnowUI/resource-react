import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale04120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-120.jpg';
export const AvatarMale04120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale04120Src;
  return (
    <img
      src={AvatarMale04120Src}
      alt="AvatarMale04120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale04120;