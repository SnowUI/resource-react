import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0312Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-12.jpg';
export const AvatarFemale0312: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0312Src;
  return (
    <img
      src={AvatarFemale0312Src}
      alt="AvatarFemale0312"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0312;