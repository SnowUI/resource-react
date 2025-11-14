import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AppleSrc from '@snowui-design-system/resource-core/assets/logos/apple.svg';

export const Apple: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AppleSrc}
      alt="Apple"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Apple;
