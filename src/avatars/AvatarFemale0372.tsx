import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0372Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-72.jpg';
export const AvatarFemale0372: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0372Src;
  return (
    <img
      src={AvatarFemale0372Src}
      alt="AvatarFemale0372"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0372;