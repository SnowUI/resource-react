import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import MannequinSrc from '@snowui-design-system/resource-core/assets/illustrations/mannequin.svg';

export const Mannequin: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={MannequinSrc}
      alt="Mannequin"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Mannequin;
