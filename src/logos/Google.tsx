import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GoogleSrc from '@snowui-design-system/resource-core/assets/logos/google.svg';

export const Google: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={GoogleSrc}
      alt="Google"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Google;
