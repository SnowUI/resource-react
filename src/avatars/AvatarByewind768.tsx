import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewind768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-768.jpg';
export const AvatarByewind768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarByewind768Src;
  return (
    <img
      src={AvatarByewind768Src}
      alt="AvatarByewind768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarByewind768;