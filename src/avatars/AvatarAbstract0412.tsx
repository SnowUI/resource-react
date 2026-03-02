import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0412Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-12.jpg';
export const AvatarAbstract0412: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0412Src;
  return (
    <img
      src={AvatarAbstract0412Src}
      alt="AvatarAbstract0412"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0412;