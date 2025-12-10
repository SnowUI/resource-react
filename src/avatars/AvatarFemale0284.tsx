import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0284Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-84.jpg';
export const AvatarFemale0284: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0284Src;
  return (
    <img
      src={AvatarFemale0284Src}
      alt="AvatarFemale0284"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0284;