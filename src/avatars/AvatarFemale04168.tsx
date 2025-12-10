import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale04168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-168.jpg';
export const AvatarFemale04168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale04168Src;
  return (
    <img
      src={AvatarFemale04168Src}
      alt="AvatarFemale04168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale04168;