import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale05384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-384.jpg';
export const AvatarFemale05384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale05384Src;
  return (
    <img
      src={AvatarFemale05384Src}
      alt="AvatarFemale05384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale05384;