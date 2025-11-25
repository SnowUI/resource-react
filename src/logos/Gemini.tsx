import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GeminiSrc from '@snowui-design-system/resource-base/assets/logos/gemini.svg';
export const Gemini: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = GeminiSrc;
  return (
    <img
      src={GeminiSrc}
      alt="Gemini"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Gemini;