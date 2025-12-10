import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0660Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-60.jpg';
export const AvatarMale0660: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0660Src;
  return (
    <img
      src={AvatarMale0660Src}
      alt="AvatarMale0660"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0660;