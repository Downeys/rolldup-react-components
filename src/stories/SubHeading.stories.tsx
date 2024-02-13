import type { Meta, StoryObj } from '@storybook/react';

import SubHeading from '../components/SubHeading/SubHeading';

const meta: Meta<typeof SubHeading> = {
    title: 'SubHeading',
    component: SubHeading,
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