import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0260Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-60.jpg';
export const AvatarMale0260: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0260Src;
  return (
    <img
      src={AvatarMale0260Src}
      alt="AvatarMale0260"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0260;