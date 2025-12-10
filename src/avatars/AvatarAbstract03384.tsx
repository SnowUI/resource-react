import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract03384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-384.jpg';
export const AvatarAbstract03384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract03384Src;
  return (
    <img
      src={AvatarAbstract03384Src}
      alt="AvatarAbstract03384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract03384;