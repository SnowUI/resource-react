import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SmilingFaceSunglassesSrc from '@snowui-design-system/resource-base/assets/emoji/smiling-face-sunglasses.svg';
export const SmilingFaceSunglasses: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = SmilingFaceSunglassesSrc;
  return (
    <img
      src={SmilingFaceSunglassesSrc}
      alt="SmilingFaceSunglasses"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default SmilingFaceSunglasses;