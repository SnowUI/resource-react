import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale06168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-168.jpg';
export const AvatarMale06168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale06168Src;
  return (
    <img
      src={AvatarMale06168Src}
      alt="AvatarMale06168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale06168;