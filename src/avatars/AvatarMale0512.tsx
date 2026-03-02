import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0512Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-12.jpg';
export const AvatarMale0512: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0512Src;
  return (
    <img
      src={AvatarMale0512Src}
      alt="AvatarMale0512"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0512;