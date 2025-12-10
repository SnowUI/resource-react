import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale03768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-768.jpg';
export const AvatarMale03768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale03768Src;
  return (
    <img
      src={AvatarMale03768Src}
      alt="AvatarMale03768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale03768;