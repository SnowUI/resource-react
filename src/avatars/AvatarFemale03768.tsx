import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale03768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-768.jpg';
export const AvatarFemale03768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale03768Src;
  return (
    <img
      src={AvatarFemale03768Src}
      alt="AvatarFemale03768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale03768;