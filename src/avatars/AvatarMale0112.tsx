import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0112Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-12.jpg';
export const AvatarMale0112: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0112Src;
  return (
    <img
      src={AvatarMale0112Src}
      alt="AvatarMale0112"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0112;