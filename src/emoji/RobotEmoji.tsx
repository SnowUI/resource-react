import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import RobotEmojiSrc from '@snowui-design-system/resource-core/assets/emoji/robot-emoji.svg';
export const RobotEmoji: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = RobotEmojiSrc;
  return (
    <img
      src={RobotEmojiSrc}
      alt="RobotEmoji"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default RobotEmoji;