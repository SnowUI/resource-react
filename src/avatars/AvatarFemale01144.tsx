import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale01144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-144.jpg';
export const AvatarFemale01144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale01144Src;
  return (
    <img
      src={AvatarFemale01144Src}
      alt="AvatarFemale01144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale01144;