import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import RedditSrc from '@snowui-design-system/resource-core/assets/logos/reddit.svg';

export const Reddit: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={RedditSrc}
      alt="Reddit"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Reddit;
