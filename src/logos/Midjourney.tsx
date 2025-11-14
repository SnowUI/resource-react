import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import MidjourneySrc from '@snowui-design-system/resource-core/assets/logos/midjourney.svg';

export const Midjourney: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={MidjourneySrc}
      alt="Midjourney"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Midjourney;
