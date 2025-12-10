import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale01384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-384.jpg';
export const AvatarFemale01384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale01384Src;
  return (
    <img
      src={AvatarFemale01384Src}
      alt="AvatarFemale01384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale01384;