import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0484Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-84.jpg';
export const AvatarFemale0484: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0484Src;
  return (
    <img
      src={AvatarFemale0484Src}
      alt="AvatarFemale0484"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0484;