import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import DribbbleSrc from '@snowui-design-system/resource-core/assets/logos/dribbble.svg';

export const Dribbble: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={DribbbleSrc}
      alt="Dribbble"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Dribbble;
