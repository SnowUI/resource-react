import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GithubSrc from '@snowui-design-system/resource-core/assets/logos/github.svg';

export const Github: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={GithubSrc}
      alt="Github"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Github;
