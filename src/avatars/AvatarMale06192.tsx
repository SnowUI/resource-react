import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale06192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-192.jpg';
export const AvatarMale06192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale06192Src;
  return (
    <img
      src={AvatarMale06192Src}
      alt="AvatarMale06192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale06192;