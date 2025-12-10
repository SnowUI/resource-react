import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract041536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-1536.jpg';
export const AvatarAbstract041536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract041536Src;
  return (
    <img
      src={AvatarAbstract041536Src}
      alt="AvatarAbstract041536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract041536;