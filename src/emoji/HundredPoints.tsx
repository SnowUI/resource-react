import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import HundredPointsSrc from '@snowui-design-system/resource-core/assets/emoji/hundred-points.svg';

export const HundredPoints: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={HundredPointsSrc}
      alt="HundredPoints"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default HundredPoints;
