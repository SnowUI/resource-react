import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale04768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-768.jpg';
export const AvatarFemale04768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale04768Src;
  return (
    <img
      src={AvatarFemale04768Src}
      alt="AvatarFemale04768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale04768;