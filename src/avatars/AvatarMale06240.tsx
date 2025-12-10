import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale06240Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-240.jpg';
export const AvatarMale06240: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale06240Src;
  return (
    <img
      src={AvatarMale06240Src}
      alt="AvatarMale06240"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale06240;