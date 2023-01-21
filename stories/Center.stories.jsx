import React from 'react';

import { Center, Paper } from '../src';

export default {
  title: 'Layout/Center',
  component: Center,
  argTypes: {
    expand: {
      control: { type: 'boolean' }
    },
  },
};

const Template = (args) => (
  <div style={{ height: '100vh' }}>
    <Center {...args}>
      <Paper elevation='low'>
        This card should be centered!
      </Paper>
    </Center>
  </div>
);

export const CournerCenter = Template.bind({});

CournerCenter.args = {
  expand: false,
};
