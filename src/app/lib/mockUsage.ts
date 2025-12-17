export type FeatureUsage = {
  feature: string;
  usage: number;
};

export const featureUsage: FeatureUsage[] = [
  { feature: "Login", usage: 420 },
  { feature: "Dashboard", usage: 380 },
  { feature: "Reports", usage: 210 },
  { feature: "Settings", usage: 160 },
  { feature: "Billing", usage: 95 },
];

export type PlanDistribution = {
  plan: string;
  users: number;
};

export const planDistribution: PlanDistribution[] = [
  { plan: "Free", users: 620 },
  { plan: "Pro", users: 280 },
  { plan: "Enterprise", users: 100 },
];
