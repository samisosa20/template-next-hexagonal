import type { Meta, StoryObj } from '@storybook/react';

import { Icons } from './icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/DataDisplay/Icons',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Spinner: Story = {
  render: ()=> <Icons.spinner color='#029CFD'/>
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Close: Story = {
  render: ()=> <Icons.close color='#029CFD'/>
};