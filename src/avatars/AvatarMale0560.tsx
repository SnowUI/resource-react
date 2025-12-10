import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0560Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-60.jpg';
export const AvatarMale0560: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0560Src;
  return (
    <img
      src={AvatarMale0560Src}
      alt="AvatarMale0560"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0560;