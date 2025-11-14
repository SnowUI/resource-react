import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SnowIconSrc from '@snowui-design-system/resource-core/assets/logos/snow-icon.svg';

export const SnowIcon: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={SnowIconSrc}
      alt="SnowIcon"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default SnowIcon;
