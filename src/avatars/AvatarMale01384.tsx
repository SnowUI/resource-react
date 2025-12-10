import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale01384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-384.jpg';
export const AvatarMale01384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale01384Src;
  return (
    <img
      src={AvatarMale01384Src}
      alt="AvatarMale01384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale01384;