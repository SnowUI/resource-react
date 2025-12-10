import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract0260Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-60.jpg';
export const AvatarAbstract0260: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract0260Src;
  return (
    <img
      src={AvatarAbstract0260Src}
      alt="AvatarAbstract0260"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract0260;