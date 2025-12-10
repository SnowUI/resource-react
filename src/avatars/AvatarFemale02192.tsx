import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale02192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-192.jpg';
export const AvatarFemale02192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale02192Src;
  return (
    <img
      src={AvatarFemale02192Src}
      alt="AvatarFemale02192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale02192;