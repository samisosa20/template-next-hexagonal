'use client'
import { Card } from "@/src/components";
import { Chart } from "react-google-charts";

export function DashboardChart() {
    return <Card className="col-span-4">
    <Chart
      chartType="BarChart"
      data={[
        ["Age", "Weight"],
        [4, 5.5],
        [8, 12],
      ]}
      width="100%"
      height="400px"
      legendToggle
    />
  </Card>
}