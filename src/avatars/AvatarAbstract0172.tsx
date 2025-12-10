import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0172Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-72.jpg';
export const AvatarAbstract0172: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0172Src;
  return (
    <img
      src={AvatarAbstract0172Src}
      alt="AvatarAbstract0172"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0172;