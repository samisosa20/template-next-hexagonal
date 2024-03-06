import type { Meta, StoryObj } from '@storybook/react';

import { Table, TableHeader, TableBody, TableHead, TableRow, } from './table';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/DataDisplay/Table',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Header: Story = {
  render: ()=> <Table>
    <TableHeader>
      <TableRow>
        <TableHead>
          Acciones
        </TableHead>
        <TableHead>
          Nombre
        </TableHead>
        <TableHead>
          Apellido
        </TableHead>
        <TableHead>
          Ciudad
        </TableHead>
      </TableRow>
    </TableHeader>
  </Table>
};

export const Body: Story = {
  render: ()=> <Table>
    <TableBody>
      <TableRow>
        <TableHead>
          Acciones
        </TableHead>
        <TableHead>
          Nombre
        </TableHead>
        <TableHead>
          Apellido
        </TableHead>
        <TableHead>
          Ciudad
        </TableHead>
      </TableRow>
    </TableBody>
  </Table>
};

export const Full: Story = {
  render: ()=> <Table>
     <TableHeader>
      <TableRow>
        <TableHead>
          Acciones
        </TableHead>
        <TableHead>
          Nombre
        </TableHead>
        <TableHead>
          Apellido
        </TableHead>
        <TableHead>
          Ciudad
        </TableHead>
      </TableRow>
    </TableHeader>
    {Array.from({length: 4}).map((_, i) => <TableBody key={i}>
      <TableRow>
        <TableHead>
          ...
        </TableHead>
        <TableHead>
          Camilo
        </TableHead>
        <TableHead>
          Yepes
        </TableHead>
        <TableHead>
          Madrid
        </TableHead>
      </TableRow>
    </TableBody>)}
  </Table>
};
