import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import TikTokSrc from '@snowui-design-system/resource-core/assets/logos/tik-tok.svg';

export const TikTok: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={TikTokSrc}
      alt="TikTok"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default TikTok;
