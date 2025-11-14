import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import VoiceSrc from '@snowui-design-system/resource-core/assets/illustrations/voice.svg';

export const Voice: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={VoiceSrc}
      alt="Voice"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Voice;
