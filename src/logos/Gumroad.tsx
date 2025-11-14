import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GumroadSrc from '@snowui-design-system/resource-core/assets/logos/gumroad.svg';

export const Gumroad: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={GumroadSrc}
      alt="Gumroad"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gumroad;
