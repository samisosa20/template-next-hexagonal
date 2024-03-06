import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './typography';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/DataDisplay/Typography',
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const H1: Story = {
  args: {
    variant: 'h1',
    children: "Soy Etiqueta H1",
    component: 'h1',
    weight: 500
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: "Soy Etiqueta H2",
    component: "h2"
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
    component: 'h3',
    children: "Soy Etiqueta H3"
  },
};

export const Title: Story = {
  args: {
    variant: 'title',
    children: "Soy un titulo"
  },
};


export const SubTitle: Story = {
  args: {
    variant: 'subtitle',
    children: "Soy un subtitulo"
  },
};

