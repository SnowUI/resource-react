import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SnowflakeSrc from '@snowui-design-system/resource-core/assets/emoji/snowflake.svg';
export const Snowflake: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = SnowflakeSrc;
  return (
    <img
      src={SnowflakeSrc}
      alt="Snowflake"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Snowflake;