import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import VoiceSrc from '@snowui-design-system/resource-core/assets/illustrations/voice.svg';
export const Voice: React.FC<BackgroundProps> = ({ width = 320, height, ...rest }) => {
  const resolvedWidth = width ?? 320;
  const imageSrc = VoiceSrc;
  return (
    <img
      src={VoiceSrc}
      alt="Voice"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Voice;