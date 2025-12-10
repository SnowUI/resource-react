import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract04168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-168.jpg';
export const AvatarAbstract04168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract04168Src;
  return (
    <img
      src={AvatarAbstract04168Src}
      alt="AvatarAbstract04168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract04168;