import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import RedditSrc from '@snowui-design-system/resource-base/assets/logos/reddit.svg';
export const Reddit: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = RedditSrc;
  return (
    <img
      src={RedditSrc}
      alt="Reddit"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Reddit;