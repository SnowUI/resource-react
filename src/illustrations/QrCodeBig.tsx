import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import QrCodeBigSrc from '@snowui-design-system/resource-core/assets/illustrations/qr-code-big.svg';

export const QrCodeBig: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={QrCodeBigSrc}
      alt="QrCodeBig"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default QrCodeBig;
