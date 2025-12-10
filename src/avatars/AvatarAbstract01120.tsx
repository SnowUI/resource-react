import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract01120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-120.jpg';
export const AvatarAbstract01120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract01120Src;
  return (
    <img
      src={AvatarAbstract01120Src}
      alt="AvatarAbstract01120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract01120;