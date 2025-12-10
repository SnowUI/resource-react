import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract03192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-192.jpg';
export const AvatarAbstract03192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract03192Src;
  return (
    <img
      src={AvatarAbstract03192Src}
      alt="AvatarAbstract03192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract03192;