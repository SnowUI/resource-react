import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewind384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-384.jpg';
export const AvatarByewind384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarByewind384Src;
  return (
    <img
      src={AvatarByewind384Src}
      alt="AvatarByewind384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarByewind384;