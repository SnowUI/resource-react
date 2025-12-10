import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale06144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-144.jpg';
export const AvatarFemale06144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale06144Src;
  return (
    <img
      src={AvatarFemale06144Src}
      alt="AvatarFemale06144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale06144;