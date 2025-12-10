import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale06768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-768.jpg';
export const AvatarMale06768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale06768Src;
  return (
    <img
      src={AvatarMale06768Src}
      alt="AvatarMale06768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale06768;