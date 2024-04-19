import { Card, Grid, Stack, Typography } from "@/src/components";
import { DashboardChart } from "./_component";


export default function Dashboard() {
  return (
    <Grid spacing="md" >
      <Card>
        <Card.Title>Indicador 1</Card.Title>
      </Card>
      <Card>
        <Card.Title>Indicador 2</Card.Title>
      </Card>
      <Card>
        <Card.Title>Indicador 3</Card.Title>
      </Card>
      <Card>
        <Card.Title>Indicador 4</Card.Title>
      </Card>
      <DashboardChart/>
    </Grid>
  );
}
