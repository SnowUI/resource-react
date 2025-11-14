export function toPascalCase(input: string): string {
  return input
    .replace(/(^\w|[-_]\w)/g, (m) => m.replace(/[-_]/, '').toUpperCase());
}

export function toKebabCase(input: string): string {
  return input
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

export function isValidWeight(weight: string): boolean {
  return ['regular', 'thin', 'light', 'bold', 'fill', 'duotone'].includes(weight);
}


