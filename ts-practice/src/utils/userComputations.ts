import type { User } from "../types/user";

export function countUsersByRole(
  users: User[],
): Record<User["role"], number> {
  const counts: Record<User["role"], number> = {
    admin: 0,
    annotator: 0,
    verifier: 0,
  };

  for (const user of users) {
    counts[user.role]++;
  }

  return counts;
}

export function getActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive);
}

export function getUserById(
  users: User[],
  id: number,
): User | null {
  const user = users.find((user) => user.id === id);

  return user ?? null;
}