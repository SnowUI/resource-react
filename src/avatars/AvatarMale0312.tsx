import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0312Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-12.jpg';
export const AvatarMale0312: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0312Src;
  return (
    <img
      src={AvatarMale0312Src}
      alt="AvatarMale0312"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0312;