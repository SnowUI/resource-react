import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import NintendoSrc from '@snowui-design-system/resource-core/assets/logos/nintendo.svg';

export const Nintendo: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={NintendoSrc}
      alt="Nintendo"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Nintendo;
