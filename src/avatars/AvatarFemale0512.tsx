import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0512Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-12.jpg';
export const AvatarFemale0512: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0512Src;
  return (
    <img
      src={AvatarFemale0512Src}
      alt="AvatarFemale0512"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0512;