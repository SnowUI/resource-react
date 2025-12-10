import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0696Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-96.jpg';
export const AvatarMale0696: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0696Src;
  return (
    <img
      src={AvatarMale0696Src}
      alt="AvatarMale0696"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0696;