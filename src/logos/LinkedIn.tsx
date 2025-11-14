import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import LinkedInSrc from '@snowui-design-system/resource-core/assets/logos/linked-in.svg';

export const LinkedIn: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={LinkedInSrc}
      alt="LinkedIn"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default LinkedIn;
