import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SmilingFaceSunglassesSrc from '@snowui-design-system/resource-core/assets/emoji/smiling-face-sunglasses.svg';

export const SmilingFaceSunglasses: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={SmilingFaceSunglassesSrc}
      alt="SmilingFaceSunglasses"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default SmilingFaceSunglasses;
