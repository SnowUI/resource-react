import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale02240Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-240.jpg';
export const AvatarFemale02240: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale02240Src;
  return (
    <img
      src={AvatarFemale02240Src}
      alt="AvatarFemale02240"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale02240;