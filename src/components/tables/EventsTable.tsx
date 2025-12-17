"use client";

import { EventItem } from "@/app/lib/mockEvents";
import { useMemo, useState } from "react";

type Props = {
  data: EventItem[];
};

const PAGE_SIZE = 8;

export function EventsTable({ data }: Props) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return data.filter(
      (e) =>
        e.event.toLowerCase().includes(query.toLowerCase()) ||
        e.user.toLowerCase().includes(query.toLowerCase())
    );
  }, [data, query]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const pagedData = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return (
    <div>
      {/* Search */}
      <input
        className="mb-4 w-full sm:max-w-xs rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-500"
        placeholder="Search event or user..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-400 border-b border-slate-800">
              <th className="py-2">Event</th>
              <th>User</th>
              <th>Platform</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {pagedData.map((e) => (
              <tr
                key={e.id}
                className="border-b border-slate-800 text-slate-200"
              >
                <td className="py-2 font-medium">{e.event}</td>
                <td>{e.user}</td>
                <td className="capitalize">{e.platform}</td>
                <td className="text-slate-400">
                  {new Date(e.date).toLocaleDateString()}
                </td>
              </tr>
            ))}

            {pagedData.length === 0 && (
              <tr>
                <td colSpan={4} className="py-6 text-center text-slate-500">
                  No events found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-slate-400">
          Page {page} of {totalPages}
        </span>

        <div className="flex gap-2">
          <button
            className="px-3 py-1 rounded border border-slate-700 disabled:opacity-40"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </button>
          <button
            className="px-3 py-1 rounded border border-slate-700 disabled:opacity-40"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
