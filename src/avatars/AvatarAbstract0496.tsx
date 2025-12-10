import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0496Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-96.jpg';
export const AvatarAbstract0496: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0496Src;
  return (
    <img
      src={AvatarAbstract0496Src}
      alt="AvatarAbstract0496"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0496;