import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './pagination';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/DataDisplay/Pagination',
  component: Pagination,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Empty: Story = {
  args: {
    meta: {
        currentPage: 0,
        lastPage: 0,
        totalPages: 0,
    },
    onChange: ()=>{}
  },
};

export const WithData: Story = {
  args: {
    meta: {
        currentPage: 1,
        lastPage: 10,
        totalPages: 10,
    },
    onChange: ()=>{}
  },
};