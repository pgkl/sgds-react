/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
  description: 'A button.',
  argTypes: {
    buttonType: { options: ['primary', 'secondary', 'cancel', 'disabled'], control: { type: 'radio' } },
  },
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args}>Click me</Button>;

// 👇 Each story then reuses that template
export const Default = Template.bind({});

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary',
};

export const Cancel = Template.bind({});
Cancel.args = {
  buttonType: 'cancel',
};

export const Disabled = Template.bind({});
Disabled.args = {
  buttonType: 'disabled',
};

export const OnClick = Template.bind({});
OnClick.args = {
  // eslint-disable-next-line no-alert
  onClick: () => alert('Clicked the button!'),
};

export const FixedWidth = Template.bind({});
FixedWidth.args = {
  fixedWidth: true,
};
