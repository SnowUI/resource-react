import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M0 64c0-17.673 14.327-32 32-32h192c17.673 0 32 14.327 32 32v128c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32z" opacity=".04"/><path fill="currentColor" fillRule="evenodd" d="M224 32c17.673 0 32 14.327 32 32v128c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32zm-52 8H32C18.745 40 8 50.745 8 64v28h51c18.225 0 33 14.775 33 33v91h80zm8 176h44c13.255 0 24-10.745 24-24v-2.154h-68zm68-34.154v-40.205h-68v40.205zm0-48.205V93.436h-68v40.205zm0-48.205V64c0-13.255-10.745-24-24-24h-44v45.436zM8 137.854V100h51c13.807 0 25 11.193 25 25v12.854zm0 45.853v-37.853h76v37.853zM8 192v-.293h76V216H32c-13.255 0-24-10.745-24-24" clipRule="evenodd"/></> } as const;

export const Chip: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Chip.displayName = 'Chip';

export default Chip;
