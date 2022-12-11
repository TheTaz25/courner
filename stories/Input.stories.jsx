import React from 'react';

import { Input } from '../src/';

export default {
  title: 'Data Entry/Atomic/Input',
  component: Input,
  argTypes: {
    theme: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    hasError: {
      control: { type: 'boolean' }
    }
  }
};

const Template = (args) => <Input {...args} />;

export const CournerInput = Template.bind({});

CournerInput.args = {
  theme: 'primary',
  hasError: false,
};