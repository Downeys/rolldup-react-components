import type { Meta, StoryObj } from '@storybook/react';

import SearchBar from '../components/SearchBar/SearchBar';

const meta: Meta<typeof SearchBar> = {
    title: 'SearchBar',
    component: SearchBar,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: { },
  };

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { },
};