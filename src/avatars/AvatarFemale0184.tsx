import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0184Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-84.jpg';
export const AvatarFemale0184: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0184Src;
  return (
    <img
      src={AvatarFemale0184Src}
      alt="AvatarFemale0184"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0184;