import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewind1536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-1536.jpg';
export const AvatarByewind1536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarByewind1536Src;
  return (
    <img
      src={AvatarByewind1536Src}
      alt="AvatarByewind1536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarByewind1536;