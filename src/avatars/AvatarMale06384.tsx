import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale06384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-384.jpg';
export const AvatarMale06384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale06384Src;
  return (
    <img
      src={AvatarMale06384Src}
      alt="AvatarMale06384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale06384;