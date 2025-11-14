import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GrokSrc from '@snowui-design-system/resource-core/assets/logos/grok.svg';

export const Grok: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={GrokSrc}
      alt="Grok"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Grok;
