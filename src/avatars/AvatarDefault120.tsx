import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarDefault120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-default-120.jpg';
export const AvatarDefault120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarDefault120Src;
  return (
    <img
      src={AvatarDefault120Src}
      alt="AvatarDefault120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarDefault120;