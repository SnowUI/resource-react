import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale05384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-384.jpg';
export const AvatarMale05384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale05384Src;
  return (
    <img
      src={AvatarMale05384Src}
      alt="AvatarMale05384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale05384;