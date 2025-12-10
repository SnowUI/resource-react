import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarDefault168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-default-168.jpg';
export const AvatarDefault168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarDefault168Src;
  return (
    <img
      src={AvatarDefault168Src}
      alt="AvatarDefault168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarDefault168;