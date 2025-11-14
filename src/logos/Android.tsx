import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AndroidSrc from '@snowui-design-system/resource-core/assets/logos/android.svg';
export const Android: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AndroidSrc;
  return (
    <img
      src={AndroidSrc}
      alt="Android"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Android;