import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import StripeSrc from '@snowui-design-system/resource-core/assets/logos/stripe.svg';
export const Stripe: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = StripeSrc;
  return (
    <img
      src={StripeSrc}
      alt="Stripe"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Stripe;