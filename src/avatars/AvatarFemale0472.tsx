import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0472Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-72.jpg';
export const AvatarFemale0472: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0472Src;
  return (
    <img
      src={AvatarFemale0472Src}
      alt="AvatarFemale0472"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0472;