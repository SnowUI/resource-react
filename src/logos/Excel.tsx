import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import ExcelSrc from '@snowui-design-system/resource-core/assets/logos/excel.svg';
export const Excel: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = ExcelSrc;
  return (
    <img
      src={ExcelSrc}
      alt="Excel"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Excel;