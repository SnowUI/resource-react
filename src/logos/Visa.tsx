import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import VisaSrc from '@snowui-design-system/resource-core/assets/logos/visa.svg';

export const Visa: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={VisaSrc}
      alt="Visa"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Visa;
