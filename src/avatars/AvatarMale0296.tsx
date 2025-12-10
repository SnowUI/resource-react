import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale0296Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-96.jpg';
export const AvatarMale0296: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale0296Src;
  return (
    <img
      src={AvatarMale0296Src}
      alt="AvatarMale0296"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale0296;