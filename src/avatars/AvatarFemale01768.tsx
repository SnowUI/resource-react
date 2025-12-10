import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale01768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-768.jpg';
export const AvatarFemale01768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale01768Src;
  return (
    <img
      src={AvatarFemale01768Src}
      alt="AvatarFemale01768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale01768;