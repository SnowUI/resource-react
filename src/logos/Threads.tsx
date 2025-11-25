import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import ThreadsSrc from '@snowui-design-system/resource-base/assets/logos/threads.svg';
export const Threads: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = ThreadsSrc;
  return (
    <img
      src={ThreadsSrc}
      alt="Threads"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Threads;