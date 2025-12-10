import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract02120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-120.jpg';
export const AvatarAbstract02120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract02120Src;
  return (
    <img
      src={AvatarAbstract02120Src}
      alt="AvatarAbstract02120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract02120;