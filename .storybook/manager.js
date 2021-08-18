import { addons } from '@storybook/addons';

import MyTheme from './theme';

addons.setConfig({
  theme: MyTheme,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
});
