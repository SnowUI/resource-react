import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarDefault768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-default-768.jpg';
export const AvatarDefault768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarDefault768Src;
  return (
    <img
      src={AvatarDefault768Src}
      alt="AvatarDefault768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarDefault768;