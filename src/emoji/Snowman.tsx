import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SnowmanSrc from '@snowui-design-system/resource-base/assets/emoji/snowman.svg';
export const Snowman: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = SnowmanSrc;
  return (
    <img
      src={SnowmanSrc}
      alt="Snowman"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Snowman;