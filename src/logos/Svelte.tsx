import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SvelteSrc from '@snowui-design-system/resource-base/assets/logos/svelte.svg';
export const Svelte: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = SvelteSrc;
  return (
    <img
      src={SvelteSrc}
      alt="Svelte"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Svelte;