import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale02384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-384.jpg';
export const AvatarFemale02384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale02384Src;
  return (
    <img
      src={AvatarFemale02384Src}
      alt="AvatarFemale02384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale02384;