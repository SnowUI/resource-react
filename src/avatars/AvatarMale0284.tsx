import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0284Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-84.jpg';
export const AvatarMale0284: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0284Src;
  return (
    <img
      src={AvatarMale0284Src}
      alt="AvatarMale0284"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0284;