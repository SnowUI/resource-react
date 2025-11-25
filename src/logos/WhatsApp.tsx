import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import WhatsAppSrc from '@snowui-design-system/resource-base/assets/logos/whats-app.svg';
export const WhatsApp: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = WhatsAppSrc;
  return (
    <img
      src={WhatsAppSrc}
      alt="WhatsApp"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default WhatsApp;