import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarDefault240Src from '@snowui-design-system/resource-base/assets/avatars/avatar-default-240.jpg';
export const AvatarDefault240: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarDefault240Src;
  return (
    <img
      src={AvatarDefault240Src}
      alt="AvatarDefault240"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarDefault240;