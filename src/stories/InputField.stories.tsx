import type { Meta, StoryObj } from '@storybook/react';

import InputField from '../components/InputField/InputField';

const meta: Meta<typeof InputField> = {
    title: 'InputField',
    component: InputField,
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
    name: "Example"
   },
};