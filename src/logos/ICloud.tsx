import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import ICloudSrc from '@snowui-design-system/resource-core/assets/logos/i-cloud.svg';

export const ICloud: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={ICloudSrc}
      alt="ICloud"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default ICloud;
