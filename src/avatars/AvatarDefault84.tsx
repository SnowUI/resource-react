import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarDefault84Src from '@snowui-design-system/resource-base/assets/avatars/avatar-default-84.jpg';
export const AvatarDefault84: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarDefault84Src;
  return (
    <img
      src={AvatarDefault84Src}
      alt="AvatarDefault84"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarDefault84;