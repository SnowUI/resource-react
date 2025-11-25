import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import HundredPointsSrc from '@snowui-design-system/resource-base/assets/emoji/hundred-points.svg';
export const HundredPoints: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = HundredPointsSrc;
  return (
    <img
      src={HundredPointsSrc}
      alt="HundredPoints"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default HundredPoints;