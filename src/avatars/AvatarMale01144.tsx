import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale01144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-144.jpg';
export const AvatarMale01144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale01144Src;
  return (
    <img
      src={AvatarMale01144Src}
      alt="AvatarMale01144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale01144;