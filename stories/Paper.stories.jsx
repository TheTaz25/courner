import React from 'react';

import { Paper } from '../src';

const Template = (args) => (
  <Paper {...args}>
    Here could be your ad!
  </Paper>
);

export const PaperComponent = Template.bind({});
PaperComponent.args = {
  elevation: 'none',
};

export default {
  title: 'Data Display/Atomic/Paper',
  component: Paper,
  argTypes: {
    elevation: {
      options: ['none', 'low', 'mid', 'high'],
      control: { type: 'radio' }
    },
    interactive: {
      control: { type: 'boolean' }
    },
    bordered: {
      control: { type: 'boolean' }
    }
  }
}