import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale06120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-120.jpg';
export const AvatarMale06120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale06120Src;
  return (
    <img
      src={AvatarMale06120Src}
      alt="AvatarMale06120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale06120;