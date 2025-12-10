import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale04240Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-240.jpg';
export const AvatarFemale04240: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale04240Src;
  return (
    <img
      src={AvatarFemale04240Src}
      alt="AvatarFemale04240"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale04240;