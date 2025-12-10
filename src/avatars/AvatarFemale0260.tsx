import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0260Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-60.jpg';
export const AvatarFemale0260: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0260Src;
  return (
    <img
      src={AvatarFemale0260Src}
      alt="AvatarFemale0260"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0260;