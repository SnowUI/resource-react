import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0484Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-84.jpg';
export const AvatarMale0484: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0484Src;
  return (
    <img
      src={AvatarMale0484Src}
      alt="AvatarMale0484"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0484;