import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewind240Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-240.jpg';
export const AvatarByewind240: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarByewind240Src;
  return (
    <img
      src={AvatarByewind240Src}
      alt="AvatarByewind240"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarByewind240;