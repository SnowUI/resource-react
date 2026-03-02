import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewind12Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-12.jpg';
export const AvatarByewind12: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarByewind12Src;
  return (
    <img
      src={AvatarByewind12Src}
      alt="AvatarByewind12"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarByewind12;