import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale05192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-192.jpg';
export const AvatarMale05192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale05192Src;
  return (
    <img
      src={AvatarMale05192Src}
      alt="AvatarMale05192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale05192;