import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract04768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-768.jpg';
export const AvatarAbstract04768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract04768Src;
  return (
    <img
      src={AvatarAbstract04768Src}
      alt="AvatarAbstract04768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract04768;