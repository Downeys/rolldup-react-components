import type { Meta, StoryObj } from '@storybook/react';

import OptionsButton from '../components/OptionsButton/OptionsButton';
import PencilIcon from '../components/icons/PencilIcon';
import RemoveUserIcon from '../components/icons/RemoveUserIcon';

const meta: Meta<typeof OptionsButton> = {
    title: 'OptionsButton',
    component: OptionsButton,
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
    options: [
        { name: 'Edit', icon:PencilIcon, onClick:() => {} },
        { name: 'Remove', icon:RemoveUserIcon, onClick:() => {} },
    ]
   },
};