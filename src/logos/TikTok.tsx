import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import TikTokSrc from '@snowui-design-system/resource-base/assets/logos/tik-tok.svg';
export const TikTok: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = TikTokSrc;
  return (
    <img
      src={TikTokSrc}
      alt="TikTok"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default TikTok;