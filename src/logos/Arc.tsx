import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import ArcSrc from '@snowui-design-system/resource-core/assets/logos/arc.svg';

export const Arc: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={ArcSrc}
      alt="Arc"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Arc;
