import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pkg1 from '@keiru/pkg-1';

export default {
  title: 'Example/Pkg1',
  component: Pkg1,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Pkg1>;

const Template: ComponentStory<typeof Pkg1> = args => <Pkg1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Pkg1',
};
