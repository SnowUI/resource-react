import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale01240Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-240.jpg';
export const AvatarMale01240: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale01240Src;
  return (
    <img
      src={AvatarMale01240Src}
      alt="AvatarMale01240"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale01240;