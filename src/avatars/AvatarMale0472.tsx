import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0472Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-72.jpg';
export const AvatarMale0472: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0472Src;
  return (
    <img
      src={AvatarMale0472Src}
      alt="AvatarMale0472"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0472;