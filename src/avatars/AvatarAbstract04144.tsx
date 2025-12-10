import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract04144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-144.jpg';
export const AvatarAbstract04144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract04144Src;
  return (
    <img
      src={AvatarAbstract04144Src}
      alt="AvatarAbstract04144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract04144;