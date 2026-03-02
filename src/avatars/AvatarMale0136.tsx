import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0136Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-36.jpg';
export const AvatarMale0136: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0136Src;
  return (
    <img
      src={AvatarMale0136Src}
      alt="AvatarMale0136"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0136;