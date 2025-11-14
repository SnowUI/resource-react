import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import ExcelSrc from '@snowui-design-system/resource-core/assets/logos/excel.svg';

export const Excel: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={ExcelSrc}
      alt="Excel"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Excel;
