import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract02768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-768.jpg';
export const AvatarAbstract02768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract02768Src;
  return (
    <img
      src={AvatarAbstract02768Src}
      alt="AvatarAbstract02768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract02768;