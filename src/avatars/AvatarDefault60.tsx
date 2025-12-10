import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarDefault60Src from '@snowui-design-system/resource-base/assets/avatars/avatar-default-60.jpg';
export const AvatarDefault60: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarDefault60Src;
  return (
    <img
      src={AvatarDefault60Src}
      alt="AvatarDefault60"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarDefault60;