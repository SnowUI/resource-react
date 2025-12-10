import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale04144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-144.jpg';
export const AvatarMale04144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale04144Src;
  return (
    <img
      src={AvatarMale04144Src}
      alt="AvatarMale04144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale04144;