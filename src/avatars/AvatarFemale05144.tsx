import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale05144Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-144.jpg';
export const AvatarFemale05144: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale05144Src;
  return (
    <img
      src={AvatarFemale05144Src}
      alt="AvatarFemale05144"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale05144;