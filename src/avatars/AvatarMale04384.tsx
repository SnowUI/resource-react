import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale04384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-384.jpg';
export const AvatarMale04384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale04384Src;
  return (
    <img
      src={AvatarMale04384Src}
      alt="AvatarMale04384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale04384;