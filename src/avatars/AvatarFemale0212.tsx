import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0212Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-12.jpg';
export const AvatarFemale0212: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0212Src;
  return (
    <img
      src={AvatarFemale0212Src}
      alt="AvatarFemale0212"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0212;