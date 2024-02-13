import type { Meta, StoryObj } from '@storybook/react';

import Rating from '../components/Rating/Rating';

const meta: Meta<typeof Rating> = {
    title: 'Rating',
    component: Rating,
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
    rating: 3
   },
};