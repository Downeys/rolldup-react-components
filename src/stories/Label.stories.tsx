import type { Meta, StoryObj } from '@storybook/react';

import Label from '../components/Label/Label';

const meta: Meta<typeof Label> = {
    title: 'Label',
    component: Label,
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
    text: "Example"
   },
};