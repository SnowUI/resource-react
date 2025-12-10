import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale02120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-120.jpg';
export const AvatarMale02120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale02120Src;
  return (
    <img
      src={AvatarMale02120Src}
      alt="AvatarMale02120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale02120;