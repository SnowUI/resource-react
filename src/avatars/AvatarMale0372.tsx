import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0372Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-72.jpg';
export const AvatarMale0372: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0372Src;
  return (
    <img
      src={AvatarMale0372Src}
      alt="AvatarMale0372"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0372;