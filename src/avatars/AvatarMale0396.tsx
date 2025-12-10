import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0396Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-96.jpg';
export const AvatarMale0396: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0396Src;
  return (
    <img
      src={AvatarMale0396Src}
      alt="AvatarMale0396"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0396;