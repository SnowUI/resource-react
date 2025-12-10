import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0572Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-72.jpg';
export const AvatarMale0572: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0572Src;
  return (
    <img
      src={AvatarMale0572Src}
      alt="AvatarMale0572"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0572;