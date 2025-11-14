import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GeminiSrc from '@snowui-design-system/resource-core/assets/logos/gemini.svg';

export const Gemini: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={GeminiSrc}
      alt="Gemini"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gemini;
