import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale011536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-1536.jpg';
export const AvatarMale011536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale011536Src;
  return (
    <img
      src={AvatarMale011536Src}
      alt="AvatarMale011536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale011536;