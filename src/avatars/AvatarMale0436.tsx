import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0436Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-36.jpg';
export const AvatarMale0436: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0436Src;
  return (
    <img
      src={AvatarMale0436Src}
      alt="AvatarMale0436"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0436;