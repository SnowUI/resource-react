import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0660Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-60.jpg';
export const AvatarFemale0660: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0660Src;
  return (
    <img
      src={AvatarFemale0660Src}
      alt="AvatarFemale0660"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0660;