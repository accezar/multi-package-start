import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pkg2 from '@keiru/pkg-2';

export default {
  title: 'Example/Pkg2',
  component: Pkg2,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Pkg2>;

const Template: ComponentStory<typeof Pkg2> = args => <Pkg2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Pkg2',
};
