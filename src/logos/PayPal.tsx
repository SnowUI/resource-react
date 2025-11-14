import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import PayPalSrc from '@snowui-design-system/resource-core/assets/logos/pay-pal.svg';

export const PayPal: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={PayPalSrc}
      alt="PayPal"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default PayPal;
