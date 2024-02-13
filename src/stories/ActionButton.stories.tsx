import type { Meta, StoryObj } from '@storybook/react';

import ActionButton from '../components/ActionButton/ActionButton';

const meta: Meta<typeof ActionButton> = {
    title: 'ActionButton',
    component: ActionButton,
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