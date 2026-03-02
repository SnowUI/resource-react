import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0112Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-12.jpg';
export const AvatarFemale0112: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0112Src;
  return (
    <img
      src={AvatarFemale0112Src}
      alt="AvatarFemale0112"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0112;