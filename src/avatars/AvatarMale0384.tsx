import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-84.jpg';
export const AvatarMale0384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0384Src;
  return (
    <img
      src={AvatarMale0384Src}
      alt="AvatarMale0384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0384;