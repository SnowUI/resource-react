import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale06120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-120.jpg';
export const AvatarFemale06120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale06120Src;
  return (
    <img
      src={AvatarFemale06120Src}
      alt="AvatarFemale06120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale06120;