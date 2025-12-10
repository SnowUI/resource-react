import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarDefault144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-default-144.jpg';
export const AvatarDefault144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarDefault144Src;
  return (
    <img
      src={AvatarDefault144Src}
      alt="AvatarDefault144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarDefault144;