import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import RssLogoSrc from '@snowui-design-system/resource-core/assets/logos/rss-logo.svg';
export const RssLogo: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = RssLogoSrc;
  return (
    <img
      src={RssLogoSrc}
      alt="RssLogo"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default RssLogo;