"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { MetricCard } from "@/components/MetricCard";
import { metrics } from "../lib/mockAnalytics";
import { ActiveUsersChart } from "@/components/charts/ActiveUsersChart";
import { activeUsers30d, activeUsers7d } from "../lib/mockChartData";
import { EventsTable } from "@/components/tables/EventsTable";
import { events } from "../lib/mockEvents";
import { FeatureUsageBarChart } from "@/components/charts/FeatureUsageBarChart";
import { PlanDistributionPieChart } from "@/components/charts/PlanDistributionPieChart";
import { featureUsage, planDistribution } from "../lib/mockUsage";
import { UserRole } from "@/types/role";
import { clearStoredUser, getStoredUser } from "../lib/auth";

export default function DashboardPage() {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<{
    email: string;
    role: UserRole;
  } | null>(null);

  const [range, setRange] = useState<"7d" | "30d">("7d");

  useEffect(() => {
    setMounted(true);

    const stored = getStoredUser();
    if (!stored) {
      router.replace("/login");
      return;
    }

    setUser(stored);
  }, [router]);

  const chartData = useMemo(() => {
    return range === "7d" ? activeUsers7d : activeUsers30d;
  }, [range]);

  const headerSubtitle = useMemo(() => {
    if (!user) return "";
    return `Signed in as ${user}`;
  }, [user]);

  if (!mounted) return null;

  if (!user) return null;

  return (
    <main
      className="
    min-h-screen p-6 max-w-6xl mx-auto
    bg-white dark:bg-slate-950
    text-slate-900 dark:text-slate-100
    transition-colors
  "
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            PulseBoard
          </h1>

          <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
            <span>{headerSubtitle}</span>

            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium
        ${
          user.role === "admin"
            ? "bg-indigo-500/10 text-indigo-400"
            : "bg-emerald-500/10 text-emerald-400"
        }
      `}
            >
              {user.role.toUpperCase()}
            </span>
          </div>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900 transition-colors"
          onClick={() => {
            clearStoredUser();
            router.replace("/login");
          }}
          type="button"
        >
          Logout
        </button>
      </div>

      <section className="mt-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-white">Overview</h2>
          <span className="text-xs text-slate-500">
            Mock data • Last updated just now
          </span>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <MetricCard
              key={m.key}
              label={m.label}
              value={m.value}
              change={m.change}
            />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div
          className="
    rounded-2xl border
    bg-white dark:bg-slate-900/60
    border-slate-200 dark:border-slate-800
    text-slate-900 dark:text-slate-100 p-6
  "
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
            <h3 className="text-base font-semibold text-white">Active Users</h3>

            <div className="flex gap-2">
              {(["7d", "30d"] as const).map((r) => (
                <button
                  key={r}
                  className={`px-3 py-1 rounded-lg text-sm border transition-colors ${
                    range === r
                      ? "bg-indigo-600 border-indigo-500 text-white"
                      : "border-slate-700 text-slate-300 hover:bg-slate-800"
                  }`}
                  onClick={() => setRange(r)}
                  type="button"
                >
                  {r === "7d" ? "Last 7 days" : "Last 30 days"}
                </button>
              ))}
            </div>
          </div>

          <ActiveUsersChart data={chartData} />
        </div>
      </section>
      {user.role === "admin" && (
        <>
          {" "}
          <section className="mt-10">
            <div
              className="
    rounded-2xl border
    bg-white dark:bg-slate-900/60
    border-slate-200 dark:border-slate-800
    text-slate-900 dark:text-slate-100 p-6
  "
            >
              <h3 className="text-base font-semibold text-white mb-4">
                Recent Events
              </h3>

              <EventsTable data={events} />
            </div>
          </section>
        </>
      )}

      <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className="
    rounded-2xl border
    bg-white dark:bg-slate-900/60
    border-slate-200 dark:border-slate-800
    text-slate-900 dark:text-slate-100 p-6
  "
        >
          <h3 className="text-base font-semibold text-white mb-4">
            Feature Usage
          </h3>
          <FeatureUsageBarChart data={featureUsage} />
        </div>

        <div
          className="
    rounded-2xl border
    bg-white dark:bg-slate-900/60
    border-slate-200 dark:border-slate-800
    text-slate-900 dark:text-slate-100 p-6
  "
        >
          <h3 className="text-base font-semibold text-white mb-4">
            Plan Distribution
          </h3>
          <PlanDistributionPieChart data={planDistribution} />
        </div>
      </section>
    </main>
  );
}
