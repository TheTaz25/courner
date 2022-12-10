import React from 'react';

import { Input } from '../src/';

export default {
  title: 'Atomic/Data Entry/Input',
  component: Input,
  argTypes: {
    theme: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
};

const Template = (args) => <Input {...args} />;

export const CournerInput = Template.bind({});

CournerInput.args = {
  theme: 'primary'
};