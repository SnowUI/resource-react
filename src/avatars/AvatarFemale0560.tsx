import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0560Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-60.jpg';
export const AvatarFemale0560: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0560Src;
  return (
    <img
      src={AvatarFemale0560Src}
      alt="AvatarFemale0560"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0560;