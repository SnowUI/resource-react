import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract03120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-120.jpg';
export const AvatarAbstract03120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract03120Src;
  return (
    <img
      src={AvatarAbstract03120Src}
      alt="AvatarAbstract03120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract03120;