import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SnowflakeSrc from '@snowui-design-system/resource-core/assets/emoji/snowflake.svg';

export const Snowflake: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={SnowflakeSrc}
      alt="Snowflake"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Snowflake;
