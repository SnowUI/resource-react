import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0160Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-60.jpg';
export const AvatarFemale0160: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0160Src;
  return (
    <img
      src={AvatarFemale0160Src}
      alt="AvatarFemale0160"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0160;