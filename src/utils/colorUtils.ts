import colors from 'tailwindcss/colors';

export type GradientDirection = 't' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l' | 'tl';
export type Shade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

const colorPrefixes = {
  bg: 'bg',
  text: 'text',
  border: 'border',
  hoverBg: 'hover:bg',
  hoverText: 'hover:text'
} as const;

export type ColorType = keyof typeof colorPrefixes;

export const buildColorClass = (
  colorName: string,
  type: ColorType = 'bg',
  shade: Shade = '500',
  opacity?: string
) => {
  const prefix = colorPrefixes[type];
  const opacitySuffix = opacity ? `/${opacity}` : '';
  return `${prefix}-${colorName}-${shade}${opacitySuffix}`;
};

export const buildGradientClass = (stops?: string, direction: GradientDirection = 'r') => {
  if (!stops) {
    return '';
  }
  return `bg-gradient-to-${direction} ${stops}`;
};

type TailwindPalette = Record<string, string>;

const fallbackPalette = colors.red as unknown as TailwindPalette;



const isPalette = (value: unknown): value is TailwindPalette =>
  typeof value === 'object' && value !== null && '500' in (value as TailwindPalette);

export const getColorPalette = (colorName: string): TailwindPalette => {
  const palette = colors[colorName as keyof typeof colors];
  if (isPalette(palette)) {
    return palette;
  }
  return fallbackPalette;
};

export const getColorHex = (colorName: string, shade: Shade = '500') => {
  const palette = getColorPalette(colorName);
  return palette[shade] || fallbackPalette[shade];
};