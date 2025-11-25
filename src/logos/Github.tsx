import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GithubSrc from '@snowui-design-system/resource-base/assets/logos/github.svg';
export const Github: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = GithubSrc;
  return (
    <img
      src={GithubSrc}
      alt="Github"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Github;