import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import ClaudeSrc from '@snowui-design-system/resource-core/assets/logos/claude.svg';

export const Claude: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={ClaudeSrc}
      alt="Claude"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Claude;
