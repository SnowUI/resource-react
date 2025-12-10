import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale02384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-384.jpg';
export const AvatarMale02384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale02384Src;
  return (
    <img
      src={AvatarMale02384Src}
      alt="AvatarMale02384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale02384;