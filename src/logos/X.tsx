import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import XSrc from '@snowui-design-system/resource-core/assets/logos/x.svg';

export const X: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={XSrc}
      alt="X"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default X;
