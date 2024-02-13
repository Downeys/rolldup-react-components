import type { Meta, StoryObj } from '@storybook/react';

import Toggle from '../components/Toggle/Toggle';

const meta: Meta<typeof Toggle> = {
    title: 'Toggle',
    component: Toggle,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: { },
  };

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { isOn: true },
};