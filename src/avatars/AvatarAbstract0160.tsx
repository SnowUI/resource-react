import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0160Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-60.jpg';
export const AvatarAbstract0160: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0160Src;
  return (
    <img
      src={AvatarAbstract0160Src}
      alt="AvatarAbstract0160"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0160;