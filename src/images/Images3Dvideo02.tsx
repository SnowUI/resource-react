import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Images3Dvideo02Src from '@snowui-design-system/resource-base/assets/images/3-dvideo-02.jpg';

export const Images3Dvideo02: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Images3Dvideo02Src}
      alt="Images3Dvideo02"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Images3Dvideo02;
