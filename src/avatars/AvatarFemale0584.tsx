import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0584Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-84.jpg';
export const AvatarFemale0584: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0584Src;
  return (
    <img
      src={AvatarFemale0584Src}
      alt="AvatarFemale0584"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0584;