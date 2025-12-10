import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale01192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-192.jpg';
export const AvatarMale01192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale01192Src;
  return (
    <img
      src={AvatarMale01192Src}
      alt="AvatarMale01192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale01192;