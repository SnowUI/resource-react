import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AppStoreSrc from '@snowui-design-system/resource-base/assets/logos/app-store.svg';
export const AppStore: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AppStoreSrc;
  return (
    <img
      src={AppStoreSrc}
      alt="AppStore"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AppStore;