import { createCss, StitchesCss } from '@stitches/react';
import WebstoreTheme from './Webstore.theme';

/**
 * Holds the stiches instance
 */
export const themeConfig = createCss({
  insertionMethod: 'prepend',
  prefix: 'cav-',
  theme: WebstoreTheme.theme,
  utils: WebstoreTheme.utils,
  media: WebstoreTheme.media,
});

export type CSS = StitchesCss<typeof themeConfig>;

export const {
  styled,
  css,
  theme,
  getCssString: getCavilhaCssString,
  global: globalCavilhaCss,
  keyframes,
  config,
} = themeConfig;

export const { space, colors, radii, zIndices, fonts, fontSizes, letterSpacings, fontWeights } =
  config.theme;

export const { media } = config;
