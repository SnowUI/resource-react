import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale02768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-768.jpg';
export const AvatarMale02768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale02768Src;
  return (
    <img
      src={AvatarMale02768Src}
      alt="AvatarMale02768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale02768;