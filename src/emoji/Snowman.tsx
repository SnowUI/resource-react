import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SnowmanSrc from '@snowui-design-system/resource-core/assets/emoji/snowman.svg';

export const Snowman: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={SnowmanSrc}
      alt="Snowman"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Snowman;
