import type { Meta, StoryObj } from '@storybook/react';

import RadioButton from '../components/RadioButton/RadioButton';

const meta: Meta<typeof RadioButton> = {
    title: 'RadioButton',
    component: RadioButton,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: { },
  };

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { 
    label: "Example",
    group: "group1"
   },
};