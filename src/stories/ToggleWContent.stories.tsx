import type { Meta, StoryObj } from '@storybook/react';

import ToggleWContent from '../components/ToggleWContent/ToggleWContent';

const meta: Meta<typeof ToggleWContent> = {
    title: 'ToggleWContent',
    component: ToggleWContent,
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
    isOn: true,
    content: ['On', 'Off']
   },
};