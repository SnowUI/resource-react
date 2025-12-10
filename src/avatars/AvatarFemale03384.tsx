import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale03384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-384.jpg';
export const AvatarFemale03384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale03384Src;
  return (
    <img
      src={AvatarFemale03384Src}
      alt="AvatarFemale03384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale03384;