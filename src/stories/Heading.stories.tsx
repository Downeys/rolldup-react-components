import type { Meta, StoryObj } from '@storybook/react';

import Heading from '../components/Heading/Heading';

const meta: Meta<typeof Heading> = {
    title: 'Heading',
    component: Heading,
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