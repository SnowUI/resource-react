import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale06384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-384.jpg';
export const AvatarFemale06384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale06384Src;
  return (
    <img
      src={AvatarFemale06384Src}
      alt="AvatarFemale06384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale06384;