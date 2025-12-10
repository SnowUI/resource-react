import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale04768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-768.jpg';
export const AvatarMale04768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale04768Src;
  return (
    <img
      src={AvatarMale04768Src}
      alt="AvatarMale04768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale04768;