import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import FacebookSrc from '@snowui-design-system/resource-core/assets/logos/facebook.svg';

export const Facebook: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={FacebookSrc}
      alt="Facebook"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Facebook;
