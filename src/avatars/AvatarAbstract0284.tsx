import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0284Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-84.jpg';
export const AvatarAbstract0284: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0284Src;
  return (
    <img
      src={AvatarAbstract0284Src}
      alt="AvatarAbstract0284"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0284;