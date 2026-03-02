import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0636Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-36.jpg';
export const AvatarMale0636: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0636Src;
  return (
    <img
      src={AvatarMale0636Src}
      alt="AvatarMale0636"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0636;