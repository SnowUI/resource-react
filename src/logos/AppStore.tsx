import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AppStoreSrc from '@snowui-design-system/resource-core/assets/logos/app-store.svg';

export const AppStore: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AppStoreSrc}
      alt="AppStore"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AppStore;
