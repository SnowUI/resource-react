import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0612Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-12.jpg';
export const AvatarMale0612: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0612Src;
  return (
    <img
      src={AvatarMale0612Src}
      alt="AvatarMale0612"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0612;