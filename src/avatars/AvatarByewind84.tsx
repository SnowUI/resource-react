import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewind84Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-84.jpg';
export const AvatarByewind84: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarByewind84Src;
  return (
    <img
      src={AvatarByewind84Src}
      alt="AvatarByewind84"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarByewind84;