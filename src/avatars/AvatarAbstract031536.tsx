import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract031536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-1536.jpg';
export const AvatarAbstract031536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract031536Src;
  return (
    <img
      src={AvatarAbstract031536Src}
      alt="AvatarAbstract031536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract031536;