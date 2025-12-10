import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract02144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-144.jpg';
export const AvatarAbstract02144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract02144Src;
  return (
    <img
      src={AvatarAbstract02144Src}
      alt="AvatarAbstract02144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract02144;