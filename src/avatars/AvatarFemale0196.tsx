import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0196Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-96.jpg';
export const AvatarFemale0196: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0196Src;
  return (
    <img
      src={AvatarFemale0196Src}
      alt="AvatarFemale0196"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0196;