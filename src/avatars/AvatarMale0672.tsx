import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0672Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-72.jpg';
export const AvatarMale0672: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0672Src;
  return (
    <img
      src={AvatarMale0672Src}
      alt="AvatarMale0672"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0672;