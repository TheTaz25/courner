import React from 'react';

import { Button } from '../src/';
import '../src/styles/colorTheme.scss';
import '../src/styles/baseline.scss';
import '../src/button/button.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    theme: {
      options: ['primary', 'secondary', 'success', 'warning', 'info', 'error', 'default'],
      control: { type: 'select' },
    },
    variant: {
      options: ['default', 'outlined'],
      control: { type: 'radio' }
    },
    size: {
      options: ['medium', 'large', 'small'],
      control: { type: 'radio' },
    },
    block: {
      control: { type: 'boolean' }
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' }
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button',
  type: 'button',
  block: false,
  size: 'medium',
  theme: 'default',
  variant: 'default',
};
