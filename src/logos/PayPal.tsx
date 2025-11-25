import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import PayPalSrc from '@snowui-design-system/resource-base/assets/logos/pay-pal.svg';
export const PayPal: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = PayPalSrc;
  return (
    <img
      src={PayPalSrc}
      alt="PayPal"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default PayPal;