import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0672Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-72.jpg';
export const AvatarFemale0672: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0672Src;
  return (
    <img
      src={AvatarFemale0672Src}
      alt="AvatarFemale0672"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0672;