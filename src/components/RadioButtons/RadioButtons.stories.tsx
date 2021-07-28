/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RadioButtons, RadioButtonProps } from './RadioButtons';

const options = ['Yes', 'No', 'Maybe'];

export default {
  title: 'Radio Buttons',
  component: RadioButtons,
  description: 'Some Radio Buttons',
  argTypes: {
    // checked: { options, control: { type: 'select' } },
  },
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: Story<RadioButtonProps> = (args) => <RadioButtons {...args} />;

export const Example = Template.bind({});
Example.args = {
    question: 'Do you like pasta?',
    hint: 'Please make a choice',
  options,

};
