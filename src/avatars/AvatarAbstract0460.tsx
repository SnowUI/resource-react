import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0460Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-60.jpg';
export const AvatarAbstract0460: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0460Src;
  return (
    <img
      src={AvatarAbstract0460Src}
      alt="AvatarAbstract0460"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0460;