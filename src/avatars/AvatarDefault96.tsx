import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarDefault96Src from '@snowui-design-system/resource-base/assets/avatars/avatar-default-96.jpg';
export const AvatarDefault96: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarDefault96Src;
  return (
    <img
      src={AvatarDefault96Src}
      alt="AvatarDefault96"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarDefault96;