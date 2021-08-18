import { addDecorator } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import CavilhaTheme from './theme';

addDecorator(withPerformance);

// eslint-disable-next-line import/prefer-default-export
export const parameters = {
  viewMode: 'docs',
  previewTabs: {
    canvas: {
      hidden: false,
    },
    'storybook/docs/panel': { index: -1 },
  },
  options: {
    storySort: {
      order: ['Introdução', ['Sobre o Projeto'], 'Guidelines', 'vAlpha', 'Dev Zone'],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: CavilhaTheme,
  },
};
