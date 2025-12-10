import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewind120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-120.jpg';
export const AvatarByewind120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarByewind120Src;
  return (
    <img
      src={AvatarByewind120Src}
      alt="AvatarByewind120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarByewind120;