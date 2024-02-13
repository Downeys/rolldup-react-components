import type { Meta, StoryObj } from '@storybook/react';

import BannerButton from '../components/BannerButton/BannerButton';

const meta: Meta<typeof BannerButton> = {
    title: 'BannerButton',
    component: BannerButton,
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