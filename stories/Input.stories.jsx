import React from 'react';

import { InputCore } from '../src/';

export default {
  title: 'Data Entry/Atomic/Input',
  component: InputCore,
  argTypes: {
    theme: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    hasError: {
      control: { type: 'boolean' }
    },
    placeholder: {
      control: { type: 'text' }
    }
  }
};

const Template = (args) => <InputCore {...args} />;

export const CournerInput = Template.bind({});

CournerInput.args = {
  theme: 'primary',
  hasError: false,
};