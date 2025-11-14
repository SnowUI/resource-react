import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import RssSrc from '@snowui-design-system/resource-core/assets/logos/rss.svg';

export const Rss: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={RssSrc}
      alt="Rss"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Rss;
