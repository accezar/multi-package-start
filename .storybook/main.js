module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    'storybook-addon-performance/register',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  features: {
    postcss: false,
  },
  // core: {
  //   builder: 'webpack5',
  // },
  // webpackFinal: {
  //   resolve: {
  //     fallback: { crypto: false }, // or { crypto: { require: { resolve: "crypto-browserify" }}} when need to polyfill
  //   },
  // },
};
