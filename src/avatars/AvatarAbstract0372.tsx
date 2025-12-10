import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0372Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-72.jpg';
export const AvatarAbstract0372: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0372Src;
  return (
    <img
      src={AvatarAbstract0372Src}
      alt="AvatarAbstract0372"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0372;