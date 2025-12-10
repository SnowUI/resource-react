import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale04192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-192.jpg';
export const AvatarMale04192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale04192Src;
  return (
    <img
      src={AvatarMale04192Src}
      alt="AvatarMale04192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale04192;