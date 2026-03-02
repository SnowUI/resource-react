import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0412Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-12.jpg';
export const AvatarMale0412: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0412Src;
  return (
    <img
      src={AvatarMale0412Src}
      alt="AvatarMale0412"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0412;