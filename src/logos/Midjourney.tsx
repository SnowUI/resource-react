import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import MidjourneySrc from '@snowui-design-system/resource-base/assets/logos/midjourney.svg';
export const Midjourney: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = MidjourneySrc;
  return (
    <img
      src={MidjourneySrc}
      alt="Midjourney"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Midjourney;