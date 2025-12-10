import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0360Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-60.jpg';
export const AvatarAbstract0360: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0360Src;
  return (
    <img
      src={AvatarAbstract0360Src}
      alt="AvatarAbstract0360"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0360;