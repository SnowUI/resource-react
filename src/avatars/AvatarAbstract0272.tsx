import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0272Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-72.jpg';
export const AvatarAbstract0272: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0272Src;
  return (
    <img
      src={AvatarAbstract0272Src}
      alt="AvatarAbstract0272"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0272;