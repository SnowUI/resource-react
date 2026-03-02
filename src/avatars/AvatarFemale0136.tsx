import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0136Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-36.jpg';
export const AvatarFemale0136: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0136Src;
  return (
    <img
      src={AvatarFemale0136Src}
      alt="AvatarFemale0136"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0136;