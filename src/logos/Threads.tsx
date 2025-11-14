import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import ThreadsSrc from '@snowui-design-system/resource-core/assets/logos/threads.svg';

export const Threads: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={ThreadsSrc}
      alt="Threads"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Threads;
