import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0272Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-72.jpg';
export const AvatarMale0272: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0272Src;
  return (
    <img
      src={AvatarMale0272Src}
      alt="AvatarMale0272"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0272;