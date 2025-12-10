import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract03168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-168.jpg';
export const AvatarAbstract03168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract03168Src;
  return (
    <img
      src={AvatarAbstract03168Src}
      alt="AvatarAbstract03168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract03168;