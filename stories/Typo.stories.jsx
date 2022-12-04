import React from 'react';

import { Paragraph as ParagraphComponent } from '../src/';

const PTemplate = (args) => <ParagraphComponent {...args}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est magni non tenetur minima quaerat sed id ex deserunt odit doloribus, cum labore obcaecati fuga incidunt odio, ipsum recusandae. Modi, facere!
</ParagraphComponent>

export const Paragraph = PTemplate.bind({});

export default {
  title: 'Example/Typography',
  component: ParagraphComponent
}