import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import MastercardSrc from '@snowui-design-system/resource-base/assets/logos/mastercard.svg';
export const Mastercard: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = MastercardSrc;
  return (
    <img
      src={MastercardSrc}
      alt="Mastercard"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Mastercard;