import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import WordSrc from '@snowui-design-system/resource-core/assets/logos/word.svg';
export const Word: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = WordSrc;
  return (
    <img
      src={WordSrc}
      alt="Word"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Word;