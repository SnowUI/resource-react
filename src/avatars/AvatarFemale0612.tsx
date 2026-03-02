import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0612Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-12.jpg';
export const AvatarFemale0612: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0612Src;
  return (
    <img
      src={AvatarFemale0612Src}
      alt="AvatarFemale0612"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0612;