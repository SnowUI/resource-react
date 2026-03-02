import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0436Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-36.jpg';
export const AvatarFemale0436: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0436Src;
  return (
    <img
      src={AvatarFemale0436Src}
      alt="AvatarFemale0436"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0436;