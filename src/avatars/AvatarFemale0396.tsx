import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0396Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-96.jpg';
export const AvatarFemale0396: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0396Src;
  return (
    <img
      src={AvatarFemale0396Src}
      alt="AvatarFemale0396"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0396;