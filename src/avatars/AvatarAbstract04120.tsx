import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract04120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-120.jpg';
export const AvatarAbstract04120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract04120Src;
  return (
    <img
      src={AvatarAbstract04120Src}
      alt="AvatarAbstract04120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract04120;