import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0472Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-72.jpg';
export const AvatarAbstract0472: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0472Src;
  return (
    <img
      src={AvatarAbstract0472Src}
      alt="AvatarAbstract0472"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0472;