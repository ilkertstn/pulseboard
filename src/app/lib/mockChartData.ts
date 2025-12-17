export type ActiveUserPoint = {
  date: string;
  users: number;
};

export const activeUsers7d: ActiveUserPoint[] = [
  { date: "2025-03-01", users: 120 },
  { date: "2025-03-02", users: 132 },
  { date: "2025-03-03", users: 128 },
  { date: "2025-03-04", users: 140 },
  { date: "2025-03-05", users: 150 },
  { date: "2025-03-06", users: 162 },
  { date: "2025-03-07", users: 170 },
];

export const activeUsers30d: ActiveUserPoint[] = Array.from({ length: 30 }).map(
  (_, i) => ({
    date: `2025-03-${String(i + 1).padStart(2, "0")}`,
    users: 80 + Math.floor(Math.random() * 120),
  })
);
