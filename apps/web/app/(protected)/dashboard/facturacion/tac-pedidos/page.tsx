"use client";
import {
  Card,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Typography,
} from "@/src/components";

export default function TacOrder() {
  const header = ["row 1", "row 2", "row 3"];
  const body = [
    {
      name: "name 1",
      last: "last 1",
      year: "year 1",
    },
    {
      name: "name 2",
      last: "last 2",
      year: "year 2",
    },
    {
      name: "name 3",
      last: "last 3",
      year: "year 3",
    },
  ];
  return (
    <Stack spacing="md">
      <Typography variant="h3">Titulo</Typography>
      <Card>
        <Table >
          <TableHeader>
            <TableRow>
              {header.map((head) => (
                <TableHead key={head}>{head}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {body.map((body, i) => (
              <TableRow key={i}>
                <TableCell>{body.name}</TableCell>
                <TableCell>{body.last}</TableCell>
                <TableCell>{body.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <Stack>
          <Pagination meta={{
            currentPage: 1,
            lastPage: 2,
            totalPages: 2,
          }} onChange={()=>{}} />
        </Stack>
    </Stack>
  );
}
