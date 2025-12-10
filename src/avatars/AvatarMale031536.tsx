import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale031536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-1536.jpg';
export const AvatarMale031536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale031536Src;
  return (
    <img
      src={AvatarMale031536Src}
      alt="AvatarMale031536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale031536;