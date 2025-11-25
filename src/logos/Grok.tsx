import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GrokSrc from '@snowui-design-system/resource-base/assets/logos/grok.svg';
export const Grok: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = GrokSrc;
  return (
    <img
      src={GrokSrc}
      alt="Grok"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Grok;