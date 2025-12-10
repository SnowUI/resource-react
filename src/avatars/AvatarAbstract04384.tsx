import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract04384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-384.jpg';
export const AvatarAbstract04384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract04384Src;
  return (
    <img
      src={AvatarAbstract04384Src}
      alt="AvatarAbstract04384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract04384;