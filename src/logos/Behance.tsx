import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import BehanceSrc from '@snowui-design-system/resource-core/assets/logos/behance.svg';

export const Behance: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={BehanceSrc}
      alt="Behance"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Behance;
