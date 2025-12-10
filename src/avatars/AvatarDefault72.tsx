import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarDefault72Src from '@snowui-design-system/resource-base/assets/avatars/avatar-default-72.jpg';
export const AvatarDefault72: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarDefault72Src;
  return (
    <img
      src={AvatarDefault72Src}
      alt="AvatarDefault72"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarDefault72;