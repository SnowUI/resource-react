import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale05120Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-120.jpg';
export const AvatarFemale05120: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale05120Src;
  return (
    <img
      src={AvatarFemale05120Src}
      alt="AvatarFemale05120"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale05120;