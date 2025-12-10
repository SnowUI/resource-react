import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0496Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-96.jpg';
export const AvatarMale0496: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0496Src;
  return (
    <img
      src={AvatarMale0496Src}
      alt="AvatarMale0496"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0496;