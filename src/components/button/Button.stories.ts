import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: "Enviar"
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: "Cancelar",
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: "Guardar"
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: "Eliminar",
    size: 'medium'
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: "Continuar",
    disabled: true
  },
};

