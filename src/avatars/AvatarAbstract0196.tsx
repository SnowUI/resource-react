import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0196Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-96.jpg';
export const AvatarAbstract0196: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0196Src;
  return (
    <img
      src={AvatarAbstract0196Src}
      alt="AvatarAbstract0196"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0196;