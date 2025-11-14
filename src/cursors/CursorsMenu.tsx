import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsMenuSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-menu.svg';

export const CursorsMenu: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsMenuSrc}
      alt="CursorsMenu"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsMenu;
