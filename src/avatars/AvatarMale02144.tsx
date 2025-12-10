import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale02144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-144.jpg';
export const AvatarMale02144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale02144Src;
  return (
    <img
      src={AvatarMale02144Src}
      alt="AvatarMale02144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale02144;