import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Inputs/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    placeholder: 'Ingrese su nombre aqui....'
  },
};

export const Number: Story = {
  args: {
    placeholder: 'Ingrese su edad aqui....',
    type: 'number',
    step: 1,
    min: 0,
    max: 100
  },
};

export const File: Story = {
  args: {
    type: 'file',
  },
};

export const Checkbox: Story = {
  args: {
    type: 'checkbox',
  },
};

export const Radio: Story = {
  args: {
    type: 'radio',
  },
};