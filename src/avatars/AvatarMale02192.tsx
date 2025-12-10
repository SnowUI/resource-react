import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale02192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-192.jpg';
export const AvatarMale02192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale02192Src;
  return (
    <img
      src={AvatarMale02192Src}
      alt="AvatarMale02192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale02192;