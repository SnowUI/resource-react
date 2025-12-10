import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale06168Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-168.jpg';
export const AvatarFemale06168: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale06168Src;
  return (
    <img
      src={AvatarFemale06168Src}
      alt="AvatarFemale06168"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale06168;