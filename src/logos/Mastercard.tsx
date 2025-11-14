import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import MastercardSrc from '@snowui-design-system/resource-core/assets/logos/mastercard.svg';

export const Mastercard: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={MastercardSrc}
      alt="Mastercard"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Mastercard;
