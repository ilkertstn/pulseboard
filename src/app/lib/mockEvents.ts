export type EventItem = {
  id: string;
  event: string;
  user: string;
  platform: "web" | "mobile";
  date: string;
};

export const events: EventItem[] = Array.from({ length: 57 }).map((_, i) => ({
  id: String(i + 1),
  event: ["login", "signup", "upgrade", "logout"][
    Math.floor(Math.random() * 4)
  ],
  user: `user${i + 1}@mail.com`,
  platform: Math.random() > 0.5 ? "web" : "mobile",
  date: new Date(
    Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 7
  ).toISOString(),
}));
