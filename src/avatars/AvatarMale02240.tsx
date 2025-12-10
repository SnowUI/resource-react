import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale02240Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-240.jpg';
export const AvatarMale02240: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale02240Src;
  return (
    <img
      src={AvatarMale02240Src}
      alt="AvatarMale02240"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale02240;