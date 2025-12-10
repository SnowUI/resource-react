import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0484Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-84.jpg';
export const AvatarAbstract0484: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0484Src;
  return (
    <img
      src={AvatarAbstract0484Src}
      alt="AvatarAbstract0484"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0484;