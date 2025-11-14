import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsDefaultSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-default.svg';

export const CursorsDefault: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsDefaultSrc}
      alt="CursorsDefault"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsDefault;
