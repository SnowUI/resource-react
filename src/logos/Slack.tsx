import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SlackSrc from '@snowui-design-system/resource-base/assets/logos/slack.svg';
export const Slack: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = SlackSrc;
  return (
    <img
      src={SlackSrc}
      alt="Slack"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Slack;