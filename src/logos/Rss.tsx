import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import RssSrc from '@snowui-design-system/resource-base/assets/logos/rss.svg';
export const Rss: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = RssSrc;
  return (
    <img
      src={RssSrc}
      alt="Rss"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Rss;