import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import TwitterSrc from '@snowui-design-system/resource-base/assets/logos/twitter.svg';
export const Twitter: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = TwitterSrc;
  return (
    <img
      src={TwitterSrc}
      alt="Twitter"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Twitter;