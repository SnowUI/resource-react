import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import MicrosoftSrc from '@snowui-design-system/resource-core/assets/logos/microsoft.svg';

export const Microsoft: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={MicrosoftSrc}
      alt="Microsoft"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Microsoft;
