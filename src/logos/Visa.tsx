import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import VisaSrc from '@snowui-design-system/resource-core/assets/logos/visa.svg';
export const Visa: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = VisaSrc;
  return (
    <img
      src={VisaSrc}
      alt="Visa"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Visa;