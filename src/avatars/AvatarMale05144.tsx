import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale05144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-144.jpg';
export const AvatarMale05144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale05144Src;
  return (
    <img
      src={AvatarMale05144Src}
      alt="AvatarMale05144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale05144;