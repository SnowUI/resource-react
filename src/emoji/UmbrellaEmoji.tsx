import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import UmbrellaEmojiSrc from '@snowui-design-system/resource-core/assets/emoji/umbrella-emoji.svg';
export const UmbrellaEmoji: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = UmbrellaEmojiSrc;
  return (
    <img
      src={UmbrellaEmojiSrc}
      alt="UmbrellaEmoji"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default UmbrellaEmoji;