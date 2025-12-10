import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale01120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-120.jpg';
export const AvatarFemale01120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale01120Src;
  return (
    <img
      src={AvatarFemale01120Src}
      alt="AvatarFemale01120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale01120;