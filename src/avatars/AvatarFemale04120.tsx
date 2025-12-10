import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale04120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-120.jpg';
export const AvatarFemale04120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale04120Src;
  return (
    <img
      src={AvatarFemale04120Src}
      alt="AvatarFemale04120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale04120;