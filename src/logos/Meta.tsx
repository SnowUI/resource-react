import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import MetaSrc from '@snowui-design-system/resource-base/assets/logos/meta.svg';
export const Meta: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = MetaSrc;
  return (
    <img
      src={MetaSrc}
      alt="Meta"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Meta;