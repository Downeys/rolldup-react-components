import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '../components/Dropdown/Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'Dropdown',
    component: Dropdown,
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
    title: "Example Dropdown",
    menuItems: [
        { name: "Menu item 1" },
        { name: "Menu item 2" },
        { name: "Menu item 3" },
    ]
   },
};