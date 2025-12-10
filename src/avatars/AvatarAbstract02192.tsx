import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract02192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-192.jpg';
export const AvatarAbstract02192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract02192Src;
  return (
    <img
      src={AvatarAbstract02192Src}
      alt="AvatarAbstract02192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract02192;