import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import LemonSqueezySrc from '@snowui-design-system/resource-core/assets/logos/lemon-squeezy.svg';

export const LemonSqueezy: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={LemonSqueezySrc}
      alt="LemonSqueezy"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default LemonSqueezy;
