import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import ClaudeSrc from '@snowui-design-system/resource-base/assets/logos/claude.svg';
export const Claude: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = ClaudeSrc;
  return (
    <img
      src={ClaudeSrc}
      alt="Claude"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Claude;