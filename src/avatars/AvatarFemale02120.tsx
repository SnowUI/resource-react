import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale02120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-120.jpg';
export const AvatarFemale02120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale02120Src;
  return (
    <img
      src={AvatarFemale02120Src}
      alt="AvatarFemale02120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale02120;