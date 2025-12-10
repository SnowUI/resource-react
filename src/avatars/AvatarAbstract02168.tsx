import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract02168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-168.jpg';
export const AvatarAbstract02168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract02168Src;
  return (
    <img
      src={AvatarAbstract02168Src}
      alt="AvatarAbstract02168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract02168;