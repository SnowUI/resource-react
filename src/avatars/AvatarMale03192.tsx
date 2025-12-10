import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale03192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-192.jpg';
export const AvatarMale03192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale03192Src;
  return (
    <img
      src={AvatarMale03192Src}
      alt="AvatarMale03192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale03192;