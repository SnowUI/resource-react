import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import WhatsAppSrc from '@snowui-design-system/resource-core/assets/logos/whats-app.svg';

export const WhatsApp: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={WhatsAppSrc}
      alt="WhatsApp"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default WhatsApp;
