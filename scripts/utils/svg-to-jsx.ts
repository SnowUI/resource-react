import { transform } from '@svgr/core';

export async function svgToJsx(svg: string, componentName: string): Promise<string> {
  const jsx = await transform(
    svg,
    {
      typescript: true,
      icon: true,
      prettier: false,
      expandProps: 'end',
      svgo: true,
    },
    { componentName }
  );
  return jsx;
}


