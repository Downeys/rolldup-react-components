import type { Meta, StoryObj } from '@storybook/react';

import BinaryOption from '../components/BinaryOption/BinaryOption';

const meta: Meta<typeof BinaryOption> = {
    title: 'BinaryOption',
    component: BinaryOption,
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
    name: "Example",
    option1: "Option 1",
    option2: "Option 2"
   },
};