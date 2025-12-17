"use client";

import { PlanDistribution } from "@/app/lib/mockUsage";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#6366f1", "#22c55e", "#f59e0b"];

type Props = {
  data: PlanDistribution[];
};

export function PlanDistributionPieChart({ data }: Props) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="users"
            nameKey="plan"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={4}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid #1f2937",
              color: "#e5e7eb",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
