import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract03144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-144.jpg';
export const AvatarAbstract03144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract03144Src;
  return (
    <img
      src={AvatarAbstract03144Src}
      alt="AvatarAbstract03144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract03144;