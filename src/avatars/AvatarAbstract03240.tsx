import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract03240Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-240.jpg';
export const AvatarAbstract03240: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract03240Src;
  return (
    <img
      src={AvatarAbstract03240Src}
      alt="AvatarAbstract03240"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract03240;