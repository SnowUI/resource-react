import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale05192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-192.jpg';
export const AvatarFemale05192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale05192Src;
  return (
    <img
      src={AvatarFemale05192Src}
      alt="AvatarFemale05192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale05192;