import React from 'react';

import { Accessory } from '../src';

const Template = (args) => (
  <Accessory {...args}>
    
  </Accessory>
);

export const AccessoryText = Template.bind({});
AccessoryText.args = {
  children: "This is some text of some kind",
  theme: 'grey'
}

export default {
  title: 'Data Display/Atomic/Typography',
  component: Accessory,
  argTypes: {
    theme: {
      options: ['primary', 'secondary', 'info', 'warning', 'error', 'success', 'grey'],
      control: { type: 'select' },
    },
  }
}