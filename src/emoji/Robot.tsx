import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import RobotSrc from '@snowui-design-system/resource-core/assets/emoji/robot.svg';

export const Robot: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={RobotSrc}
      alt="Robot"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Robot;
