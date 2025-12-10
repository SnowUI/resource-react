import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract021536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-1536.jpg';
export const AvatarAbstract021536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract021536Src;
  return (
    <img
      src={AvatarAbstract021536Src}
      alt="AvatarAbstract021536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract021536;