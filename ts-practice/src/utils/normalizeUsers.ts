import type { User } from "../types/user";

export function normalizeUsers(users: User[]): {
  byId: Record<number, User>;
  allIds: number[];
} {
  const byId: Record<number, User> = {};
  const allIds: number[] = [];

  for (const user of users) {
    byId[user.id] = user;
    allIds.push(user.id);
  }

  return {
    byId,
    allIds,
  };
}