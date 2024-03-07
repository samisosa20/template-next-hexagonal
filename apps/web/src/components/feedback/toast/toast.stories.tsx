import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Toaster } from './toaster';
import { useToast } from './use-toast';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Feedback/Toast',
  component: Toaster,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;


const ToastDefault = () => {
  const { toast } = useToast();
  useEffect(()=>{
    toast({
        title: 'Title of toast',
        description: 'a liter description'
    })
  }, [])
  return <div className='h-full w-full'>
    <Toaster/>
  </div>
}

const ToastDanger = () => {
  const { toast } = useToast();
  useEffect(()=>{
    toast({
        title: 'Title of toast',
        description: 'a liter description',
        variant: 'destructive'
    })
  }, [])
  return <div className='h-full w-full'>
    <Toaster/>
  </div>
}

const ToastWarning = () => {
  const { toast } = useToast();
  useEffect(()=>{
    toast({
        title: 'Title of toast',
        description: 'a liter description',
        variant: 'warning'
    })
  }, [])
  return <div className='h-full w-full'>
    <Toaster/>
  </div>
}


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: () => <ToastDefault/>
};

export const Danger: Story = {
  render: () => <ToastDanger/>
};

export const Warning: Story = {
  render: () => <ToastWarning/>
};