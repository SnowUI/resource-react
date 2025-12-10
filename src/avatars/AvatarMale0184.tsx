import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0184Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-84.jpg';
export const AvatarMale0184: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0184Src;
  return (
    <img
      src={AvatarMale0184Src}
      alt="AvatarMale0184"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0184;