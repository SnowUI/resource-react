import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract03768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-768.jpg';
export const AvatarAbstract03768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract03768Src;
  return (
    <img
      src={AvatarAbstract03768Src}
      alt="AvatarAbstract03768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract03768;