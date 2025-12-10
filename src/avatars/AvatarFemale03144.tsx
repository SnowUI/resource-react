import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale03144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-144.jpg';
export const AvatarFemale03144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale03144Src;
  return (
    <img
      src={AvatarFemale03144Src}
      alt="AvatarFemale03144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale03144;