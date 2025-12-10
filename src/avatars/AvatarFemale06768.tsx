import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale06768Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-768.jpg';
export const AvatarFemale06768: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale06768Src;
  return (
    <img
      src={AvatarFemale06768Src}
      alt="AvatarFemale06768"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale06768;