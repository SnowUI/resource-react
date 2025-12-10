import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0360Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-60.jpg';
export const AvatarFemale0360: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0360Src;
  return (
    <img
      src={AvatarFemale0360Src}
      alt="AvatarFemale0360"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0360;