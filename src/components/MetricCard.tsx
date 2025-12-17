type Props = {
  label: string;
  value: number;
  change: number;
  trend?: "neutral" | "good" | "danger"; // New prop for manual color override
};

export function MetricCard({ label, value, change, trend }: Props) {
  const positive = change >= 0;
  
  // Determine gradient based on trend or positivity
  const isGood = trend === "good" || (trend !== "danger" && positive);
  const isDanger = trend === "danger" || (trend !== "good" && !positive);

  let bgClass = "bg-white/5 border-white/10"; // Default glass
  
  if (isGood) {
    bgClass = "bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20";
  } else if (isDanger) {
    bgClass = "bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-rose-500/20";
  } else {
    bgClass = "bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border-indigo-500/20";
  }

  return (
    <div className={`rounded-2xl border p-4 backdrop-blur-md transition-all hover:bg-white/10 hover:scale-[1.02] ${bgClass}`}>
      <p className="text-sm font-medium text-slate-300">{label}</p>

      <div className="mt-2 flex items-end justify-between">
        <p className="text-2xl font-bold tracking-tight text-white">
          {typeof value === "number" ? value.toLocaleString() : value}
        </p>

        <span
          className={`text-sm font-bold ${
            positive ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" : "text-rose-400 drop-shadow-[0_0_8px_rgba(251,113,133,0.5)]"
          }`}
        >
          {positive ? "+" : ""}
          {change}%
        </span>
      </div>
    </div>
  );
}
