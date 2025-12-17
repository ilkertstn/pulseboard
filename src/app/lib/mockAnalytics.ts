export type Metric = {
  key: string;
  label: string;
  value: number;
  change: number;
};

export const metrics: Metric[] = [
  {
    key: "mrr",
    label: "Monthly Recurring Revenue",
    value: 12450,
    change: 8.4,
  },
  {
    key: "active_users",
    label: "Active Users",
    value: 1832,
    change: 3.1,
  },
  {
    key: "new_signups",
    label: "New Signups",
    value: 245,
    change: 12.6,
  },
  {
    key: "churn",
    label: "Churn Rate",
    value: 2.1,
    change: -0.4,
  },
];
