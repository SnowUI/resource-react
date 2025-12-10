import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract01144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-144.jpg';
export const AvatarAbstract01144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract01144Src;
  return (
    <img
      src={AvatarAbstract01144Src}
      alt="AvatarAbstract01144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract01144;