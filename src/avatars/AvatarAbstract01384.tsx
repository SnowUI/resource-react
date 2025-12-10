import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract01384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-384.jpg';
export const AvatarAbstract01384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract01384Src;
  return (
    <img
      src={AvatarAbstract01384Src}
      alt="AvatarAbstract01384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract01384;