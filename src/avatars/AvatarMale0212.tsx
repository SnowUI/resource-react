import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0212Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-12.jpg';
export const AvatarMale0212: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0212Src;
  return (
    <img
      src={AvatarMale0212Src}
      alt="AvatarMale0212"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0212;