import type { User } from "../types/user";

export type UserStats = {
  total: number;
  activeCount: number;
  roleCounts: Record<User["role"], number>;
};

export function computeUserStats(
  users: User[],
): UserStats {
  // deliberate expensive work
  console.time("stats");
  for (let i = 0; i < 500_000; i++) {
    // no-op
  }
  console.timeEnd("stats");


  const roleCounts: Record<User["role"], number> = {
    admin: 0,
    annotator: 0,
    verifier: 0,
  };

  let activeCount = 0;

  users.forEach((user) => {
    if (user.isActive) {
      activeCount++;
    }

    roleCounts[user.role]++;
  });

  return {
    total: users.length,
    activeCount,
    roleCounts,
  };
}