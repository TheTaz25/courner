import React from 'react';

import { Title as TitleComponent } from '../src';

const HTemplate = (args) => (
  <>
    <TitleComponent {...args} semanticLevel='h1'>This is a h1-title</TitleComponent>
    <TitleComponent {...args} semanticLevel='h2'>This is a h2-title</TitleComponent>
    <TitleComponent {...args} semanticLevel='h3'>This is a h3-title</TitleComponent>
    <TitleComponent {...args} semanticLevel='h4'>This is a h4-title</TitleComponent>
    <TitleComponent {...args} semanticLevel='h5'>This is a h5-title</TitleComponent>
    <TitleComponent {...args} semanticLevel='h6'>This is a h6-title</TitleComponent>
  </>
);

export const Title = HTemplate.bind({});

Title.args = {
  visualLevel: 'title'
}

export default {
  title: 'Data Display/Atomic/Typography',
  component: TitleComponent,
  argTypes: {
    visualLevel: {
      options: ['title', 'subtitle', 'blocktitle'],
      control: { type: 'select' }
    }
  }
}