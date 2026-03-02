import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewind36Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-36.jpg';
export const AvatarByewind36: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarByewind36Src;
  return (
    <img
      src={AvatarByewind36Src}
      alt="AvatarByewind36"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarByewind36;