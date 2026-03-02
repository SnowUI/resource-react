import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0336Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-36.jpg';
export const AvatarFemale0336: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0336Src;
  return (
    <img
      src={AvatarFemale0336Src}
      alt="AvatarFemale0336"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0336;