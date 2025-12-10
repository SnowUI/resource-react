import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract011536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-1536.jpg';
export const AvatarAbstract011536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract011536Src;
  return (
    <img
      src={AvatarAbstract011536Src}
      alt="AvatarAbstract011536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract011536;