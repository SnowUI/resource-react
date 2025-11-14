import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import LoopSrc from '@snowui-design-system/resource-core/assets/logos/loop.svg';
export const Loop: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = LoopSrc;
  return (
    <img
      src={LoopSrc}
      alt="Loop"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Loop;