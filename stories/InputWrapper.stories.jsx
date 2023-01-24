import React from 'react';

import { Input } from '../src';

export default {
  title: 'Data Entry/Composed/Wrapped Inpupt',
  component: Input,
  argTypes: {
    error: {
      control: { type: 'boolean' }
    },
    errorText: {
      control: { type: 'text' }
    },
    label: {
      control: { type: 'text' }
    },
    description: {
      control: { type: 'text' }
    },
    replaceDescriptionWithError: {
      control: { type: 'boolean' }
    }
  },
};

const Template = (args) => <Input {...args} />;

export const CournerInputWrapper = Template.bind({});

CournerInputWrapper.args = {
  label: "Component Label",
};
