import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import BehanceSrc from '@snowui-design-system/resource-core/assets/logos/behance.svg';
export const Behance: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = BehanceSrc;
  return (
    <img
      src={BehanceSrc}
      alt="Behance"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Behance;