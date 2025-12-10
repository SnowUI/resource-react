import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale05768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-768.jpg';
export const AvatarFemale05768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale05768Src;
  return (
    <img
      src={AvatarFemale05768Src}
      alt="AvatarFemale05768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale05768;