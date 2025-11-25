import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SnowflakeEmojiSrc from '@snowui-design-system/resource-base/assets/emoji/snowflake-emoji.svg';
export const SnowflakeEmoji: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = SnowflakeEmojiSrc;
  return (
    <img
      src={SnowflakeEmojiSrc}
      alt="SnowflakeEmoji"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default SnowflakeEmoji;