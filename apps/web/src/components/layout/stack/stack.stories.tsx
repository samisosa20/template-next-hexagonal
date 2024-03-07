import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from './stack';
import { Typography } from '../..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Layouts/Stack',
  component: Stack,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Column: Story = {
  args: {
    direction: 'column',
    children: [<Typography>hola</Typography>, <Typography>mundo</Typography>]
  },
};

export const Row: Story = {
  args: {
    direction: 'row',
    spacing: 'sm',
    children: [<Typography>hola</Typography>, <Typography>mundo</Typography>]
  },
};