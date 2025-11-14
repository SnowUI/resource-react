import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import QrcodeSrc from '@snowui-design-system/resource-core/assets/illustrations/qrcode.svg';

export const Qrcode: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={QrcodeSrc}
      alt="Qrcode"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Qrcode;
