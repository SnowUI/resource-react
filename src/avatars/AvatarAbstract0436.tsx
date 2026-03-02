import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0436Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-36.jpg';
export const AvatarAbstract0436: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0436Src;
  return (
    <img
      src={AvatarAbstract0436Src}
      alt="AvatarAbstract0436"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0436;