import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0584Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-84.jpg';
export const AvatarMale0584: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0584Src;
  return (
    <img
      src={AvatarMale0584Src}
      alt="AvatarMale0584"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0584;