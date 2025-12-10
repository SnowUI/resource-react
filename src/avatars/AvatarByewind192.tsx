import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewind192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-192.jpg';
export const AvatarByewind192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarByewind192Src;
  return (
    <img
      src={AvatarByewind192Src}
      alt="AvatarByewind192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarByewind192;