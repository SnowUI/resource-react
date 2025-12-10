import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale03384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-384.jpg';
export const AvatarMale03384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale03384Src;
  return (
    <img
      src={AvatarMale03384Src}
      alt="AvatarMale03384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale03384;