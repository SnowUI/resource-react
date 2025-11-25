import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import FacebookSrc from '@snowui-design-system/resource-base/assets/logos/facebook.svg';
export const Facebook: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = FacebookSrc;
  return (
    <img
      src={FacebookSrc}
      alt="Facebook"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Facebook;