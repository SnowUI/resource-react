import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="m171.453 214.245 60.552-34.959a16 16 0 0 0 8-13.857V90.892a16 16 0 0 0-8-13.857l-60.552-34.96c-5.333-3.078-12 .77-12 6.93a8 8 0 0 0 4 6.927l52.552 30.341a16 16 0 0 1 8 13.856v56.063a16 16 0 0 1-8 13.856l-52.552 30.341a8 8 0 0 0-4 6.928c0 6.159 6.667 10.008 12 6.928M92 152c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20"/><path fill="currentColor" fillRule="evenodd" d="M100.001 44.618a16 16 0 0 0-16 0L20.326 81.381a16 16 0 0 0-8 13.856v73.525a16 16 0 0 0 8 13.856l63.675 36.763a16 16 0 0 0 16 0l63.674-36.763a16 16 0 0 0 8-13.856V95.237a16 16 0 0 0-8-13.856zm55.674 50.619L92 58.475 28.327 95.237v73.525l63.675 36.762 63.674-36.762z" clipRule="evenodd"/></> } as const;

export const Variables: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Variables.displayName = 'Variables';

export default Variables;
