import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import WordSrc from '@snowui-design-system/resource-core/assets/logos/word.svg';

export const Word: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={WordSrc}
      alt="Word"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Word;
