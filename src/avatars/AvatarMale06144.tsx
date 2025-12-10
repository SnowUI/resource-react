import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale06144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-144.jpg';
export const AvatarMale06144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale06144Src;
  return (
    <img
      src={AvatarMale06144Src}
      alt="AvatarMale06144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale06144;