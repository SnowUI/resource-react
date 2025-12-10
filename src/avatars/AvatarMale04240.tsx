import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale04240Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-240.jpg';
export const AvatarMale04240: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale04240Src;
  return (
    <img
      src={AvatarMale04240Src}
      alt="AvatarMale04240"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale04240;