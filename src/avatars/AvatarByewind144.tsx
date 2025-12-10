import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewind144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-144.jpg';
export const AvatarByewind144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarByewind144Src;
  return (
    <img
      src={AvatarByewind144Src}
      alt="AvatarByewind144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarByewind144;