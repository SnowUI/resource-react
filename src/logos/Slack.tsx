import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SlackSrc from '@snowui-design-system/resource-core/assets/logos/slack.svg';

export const Slack: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={SlackSrc}
      alt="Slack"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Slack;
