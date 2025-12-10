import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarDefault384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-default-384.jpg';
export const AvatarDefault384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarDefault384Src;
  return (
    <img
      src={AvatarDefault384Src}
      alt="AvatarDefault384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarDefault384;