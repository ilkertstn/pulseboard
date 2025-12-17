type Props = {
  label: string;
  value: number;
  change: number;
};

export function MetricCard({ label, value, change }: Props) {
  const positive = change >= 0;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <p className="text-sm text-slate-400">{label}</p>

      <div className="mt-2 flex items-end justify-between">
        <p className="text-2xl font-semibold text-white">
          {typeof value === "number" ? value.toLocaleString() : value}
        </p>

        <span
          className={`text-sm font-medium ${
            positive ? "text-green-400" : "text-red-400"
          }`}
        >
          {positive ? "+" : ""}
          {change}%
        </span>
      </div>
    </div>
  );
}
