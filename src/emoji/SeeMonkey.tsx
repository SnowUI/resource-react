import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SeeMonkeySrc from '@snowui-design-system/resource-base/assets/emoji/see-monkey.svg';
export const SeeMonkey: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = SeeMonkeySrc;
  return (
    <img
      src={SeeMonkeySrc}
      alt="SeeMonkey"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default SeeMonkey;