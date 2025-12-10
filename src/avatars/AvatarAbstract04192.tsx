import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract04192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-192.jpg';
export const AvatarAbstract04192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract04192Src;
  return (
    <img
      src={AvatarAbstract04192Src}
      alt="AvatarAbstract04192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract04192;