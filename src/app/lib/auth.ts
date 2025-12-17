import { UserRole } from "@/types/role";

export type AuthUser = {
  email: string;
  role: UserRole;
};

export function getStoredUser(): AuthUser | null {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem("pb_user");
  if (!raw) return null;

  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function setStoredUser(user: AuthUser) {
  localStorage.setItem("pb_user", JSON.stringify(user));
}

export function clearStoredUser() {
  localStorage.removeItem("pb_user");
}
