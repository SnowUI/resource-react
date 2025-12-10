import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale01768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-768.jpg';
export const AvatarMale01768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale01768Src;
  return (
    <img
      src={AvatarMale01768Src}
      alt="AvatarMale01768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale01768;