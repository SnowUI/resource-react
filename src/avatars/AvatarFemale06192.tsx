import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale06192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-192.jpg';
export const AvatarFemale06192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale06192Src;
  return (
    <img
      src={AvatarFemale06192Src}
      alt="AvatarFemale06192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale06192;