import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewind168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-168.jpg';
export const AvatarByewind168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarByewind168Src;
  return (
    <img
      src={AvatarByewind168Src}
      alt="AvatarByewind168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarByewind168;