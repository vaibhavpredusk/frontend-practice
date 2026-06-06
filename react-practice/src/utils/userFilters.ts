import type { User, UserRole } from "../types/user";

export type UserRoleFilter = "all" | UserRole;

export function filterUsers(
  users: User[],
  query: string,
  role: UserRoleFilter,
  activeOnly: boolean,
): User[] {
  const normalizedQuery = query.toLowerCase();

  return users.filter((user) => {
    const matchesQuery =
      normalizedQuery === "" ||
      user.name.toLowerCase().includes(normalizedQuery) ||
      user.email.toLowerCase().includes(normalizedQuery);

    const matchesRole =
      role === "all" || user.role === role;

    const matchesActive =
      !activeOnly || user.isActive;

    return (
      matchesQuery &&
      matchesRole &&
      matchesActive
    );
  });
}