import React from 'react';

import { Button } from '../src/button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => <Button>Hello There</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  // label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  // label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  // label: 'Button',
};
