import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import PerplexitySrc from '@snowui-design-system/resource-base/assets/logos/perplexity.svg';
export const Perplexity: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = PerplexitySrc;
  return (
    <img
      src={PerplexitySrc}
      alt="Perplexity"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Perplexity;