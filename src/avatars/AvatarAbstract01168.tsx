import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract01168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-168.jpg';
export const AvatarAbstract01168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract01168Src;
  return (
    <img
      src={AvatarAbstract01168Src}
      alt="AvatarAbstract01168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract01168;