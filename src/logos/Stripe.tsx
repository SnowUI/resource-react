import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import StripeSrc from '@snowui-design-system/resource-core/assets/logos/stripe.svg';

export const Stripe: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={StripeSrc}
      alt="Stripe"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Stripe;
