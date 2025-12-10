import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Avatar3d02384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-384.jpg';
export const Avatar3d02384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = Avatar3d02384Src;
  return (
    <img
      src={Avatar3d02384Src}
      alt="Avatar3d02384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Avatar3d02384;