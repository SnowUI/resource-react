import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewind72Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-72.jpg';
export const AvatarByewind72: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarByewind72Src;
  return (
    <img
      src={AvatarByewind72Src}
      alt="AvatarByewind72"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarByewind72;