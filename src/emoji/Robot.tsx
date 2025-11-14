import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import RobotSrc from '@snowui-design-system/resource-core/assets/emoji/robot.svg';
export const Robot: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = RobotSrc;
  return (
    <img
      src={RobotSrc}
      alt="Robot"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Robot;