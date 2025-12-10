import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale04144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-144.jpg';
export const AvatarFemale04144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale04144Src;
  return (
    <img
      src={AvatarFemale04144Src}
      alt="AvatarFemale04144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale04144;