import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale03120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-120.jpg';
export const AvatarMale03120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale03120Src;
  return (
    <img
      src={AvatarMale03120Src}
      alt="AvatarMale03120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale03120;