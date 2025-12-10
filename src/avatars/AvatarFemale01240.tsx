import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale01240Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-240.jpg';
export const AvatarFemale01240: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale01240Src;
  return (
    <img
      src={AvatarFemale01240Src}
      alt="AvatarFemale01240"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale01240;