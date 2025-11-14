import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import MetaSrc from '@snowui-design-system/resource-core/assets/logos/meta.svg';

export const Meta: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={MetaSrc}
      alt="Meta"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Meta;
