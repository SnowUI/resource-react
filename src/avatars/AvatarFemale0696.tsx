import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0696Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-96.jpg';
export const AvatarFemale0696: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0696Src;
  return (
    <img
      src={AvatarFemale0696Src}
      alt="AvatarFemale0696"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0696;