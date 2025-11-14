import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import MediumSrc from '@snowui-design-system/resource-core/assets/logos/medium.svg';

export const Medium: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={MediumSrc}
      alt="Medium"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Medium;
