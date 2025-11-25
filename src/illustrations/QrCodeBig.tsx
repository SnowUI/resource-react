import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import QrCodeBigSrc from '@snowui-design-system/resource-base/assets/illustrations/qr-code-big.svg';
export const QrCodeBig: React.FC<BackgroundProps> = ({ width = 320, height, ...rest }) => {
  const resolvedWidth = width ?? 320;
  const imageSrc = QrCodeBigSrc;
  return (
    <img
      src={QrCodeBigSrc}
      alt="QrCodeBig"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default QrCodeBig;