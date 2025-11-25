import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GoogleSrc from '@snowui-design-system/resource-base/assets/logos/google.svg';
export const Google: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = GoogleSrc;
  return (
    <img
      src={GoogleSrc}
      alt="Google"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Google;