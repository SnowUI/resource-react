import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import DribbbleSrc from '@snowui-design-system/resource-base/assets/logos/dribbble.svg';
export const Dribbble: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = DribbbleSrc;
  return (
    <img
      src={DribbbleSrc}
      alt="Dribbble"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Dribbble;