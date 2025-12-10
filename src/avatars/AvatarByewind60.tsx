import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewind60Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-60.jpg';
export const AvatarByewind60: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarByewind60Src;
  return (
    <img
      src={AvatarByewind60Src}
      alt="AvatarByewind60"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarByewind60;