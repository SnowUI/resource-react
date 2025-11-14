import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M229.6 229.7a8 8 0 0 1-5.6 2.3 8.3 8.3 0 0 1-5.7-2.3l-43.2-43.3a92.199 92.199 0 1 1 11.3-11.3l43.2 43.2a7.99 7.99 0 0 1 1.766 8.789 8 8 0 0 1-1.766 2.611M116 192a76 76 0 1 0-76-76 76.1 76.1 0 0 0 76 76"/></> } as const;

export const Search: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Search.displayName = 'Search';

export default Search;
