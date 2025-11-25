import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import 3Dvideo01Src from '@snowui-design-system/resource-base/assets/images/3-dvideo-01.jpg';

export const 3Dvideo01: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={3Dvideo01Src}
      alt="3Dvideo01"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default 3Dvideo01;
