import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import ICloudSrc from '@snowui-design-system/resource-core/assets/logos/i-cloud.svg';
export const ICloud: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = ICloudSrc;
  return (
    <img
      src={ICloudSrc}
      alt="ICloud"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default ICloud;