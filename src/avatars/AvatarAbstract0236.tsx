import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0236Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-36.jpg';
export const AvatarAbstract0236: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0236Src;
  return (
    <img
      src={AvatarAbstract0236Src}
      alt="AvatarAbstract0236"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0236;