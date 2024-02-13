import type { Meta, StoryObj } from '@storybook/react';

import CardButton from '../components/CardButton/CardButton';

const meta: Meta<typeof CardButton> = {
    title: 'CardButton',
    component: CardButton,
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