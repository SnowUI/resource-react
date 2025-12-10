import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale01168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-168.jpg';
export const AvatarFemale01168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale01168Src;
  return (
    <img
      src={AvatarFemale01168Src}
      alt="AvatarFemale01168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale01168;