import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarAbstract02384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-384.jpg';
export const AvatarAbstract02384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarAbstract02384Src;
  return (
    <img
      src={AvatarAbstract02384Src}
      alt="AvatarAbstract02384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarAbstract02384;