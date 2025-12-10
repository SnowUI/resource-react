import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale01192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-192.jpg';
export const AvatarFemale01192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale01192Src;
  return (
    <img
      src={AvatarFemale01192Src}
      alt="AvatarFemale01192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale01192;