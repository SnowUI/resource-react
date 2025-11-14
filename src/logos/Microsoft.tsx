import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import MicrosoftSrc from '@snowui-design-system/resource-core/assets/logos/microsoft.svg';
export const Microsoft: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = MicrosoftSrc;
  return (
    <img
      src={MicrosoftSrc}
      alt="Microsoft"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Microsoft;