import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-36.jpg';
export const AvatarFemale0536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0536Src;
  return (
    <img
      src={AvatarFemale0536Src}
      alt="AvatarFemale0536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0536;