import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SeeMonkeySrc from '@snowui-design-system/resource-core/assets/emoji/see-monkey.svg';

export const SeeMonkey: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={SeeMonkeySrc}
      alt="SeeMonkey"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default SeeMonkey;
