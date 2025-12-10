import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale03240Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-240.jpg';
export const AvatarMale03240: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale03240Src;
  return (
    <img
      src={AvatarMale03240Src}
      alt="AvatarMale03240"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale03240;