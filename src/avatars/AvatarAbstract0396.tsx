import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0396Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-96.jpg';
export const AvatarAbstract0396: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0396Src;
  return (
    <img
      src={AvatarAbstract0396Src}
      alt="AvatarAbstract0396"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0396;