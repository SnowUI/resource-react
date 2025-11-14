import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AndroidSrc from '@snowui-design-system/resource-core/assets/logos/android.svg';

export const Android: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AndroidSrc}
      alt="Android"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Android;
