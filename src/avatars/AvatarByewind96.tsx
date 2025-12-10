import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewind96Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-96.jpg';
export const AvatarByewind96: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarByewind96Src;
  return (
    <img
      src={AvatarByewind96Src}
      alt="AvatarByewind96"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarByewind96;