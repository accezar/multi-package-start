import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pkg3 } from '@keiru/primitives';

export default {
  title: 'Example/Pkg3',
  component: Pkg3,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Pkg3>;

const Template: ComponentStory<typeof Pkg3> = args => <Pkg3 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Pkg3',
};
