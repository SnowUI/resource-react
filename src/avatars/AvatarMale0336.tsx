import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0336Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-36.jpg';
export const AvatarMale0336: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0336Src;
  return (
    <img
      src={AvatarMale0336Src}
      alt="AvatarMale0336"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0336;