"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { setStoredUser } from "../lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");



  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border p-6">
        <h1 className="text-2xl font-semibold">PulseBoard</h1>
        <p className="text-sm opacity-70 mt-1">SaaS Analytics Dashboard</p>

        <div className="mt-6 space-y-3">
          <input
            className="w-full rounded-xl border p-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="w-full rounded-xl border p-3"
            onClick={() => {
              const userEmail = email || "demo@user.com";
              setStoredUser({
                email: userEmail,
                role: userEmail.includes("admin") ? "admin" : "viewer",
              });
              router.push("/dashboard");
            }}
          >
            Login (Demo)
          </button>
        </div>
      </div>
    </main>
  );
}
