import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AuthenticatorSrc from '@snowui-design-system/resource-base/assets/logos/authenticator.svg';
export const Authenticator: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AuthenticatorSrc;
  return (
    <img
      src={AuthenticatorSrc}
      alt="Authenticator"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Authenticator;