import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Images3Dvideo01Src from '@snowui-design-system/resource-core/assets/images/3-dvideo-01.jpg';

export const Images3Dvideo01: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Images3Dvideo01Src}
      alt="Images3Dvideo01"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Images3Dvideo01;
