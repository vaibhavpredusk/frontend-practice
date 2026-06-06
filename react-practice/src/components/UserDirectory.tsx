import { useState } from "react";
import type { User } from "../types/user";
import { UserCard } from "./UserCard";
import {
  filterUsers,
  type UserRoleFilter,
} from "../utils/userFilters";

type UserDirectoryProps = {
  users: User[];
};

export function UserDirectory({
  users,
}: UserDirectoryProps) {
  const [query, setQuery] = useState("");

  const [role, setRole] = useState<UserRoleFilter>("all");

  const [activeOnly, setActiveOnly] = useState(false);

  const filteredUsers = filterUsers(
    users,
    query,
    role,
    activeOnly,
  );

  return (
    <div>
      <h2>User Directory</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or email"
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      {/* Role Filter */}
      <select
        value={role}
        onChange={(e) =>
          setRole(
            e.target.value as UserRoleFilter,
          )
        }
      >
        <option value="all">All</option>

        <option value="admin">
          Admin
        </option>

        <option value="annotator">
          Annotator
        </option>

        <option value="verifier">
          Verifier
        </option>
      </select>

      {/* Active Only */}
      <label>
        <input
          type="checkbox"
          checked={activeOnly}
          onChange={(e) =>
            setActiveOnly(
              e.target.checked,
            )
          }
        />
        Active Users Only
      </label>

      <p>
        Matching Users:{" "}
        {filteredUsers.length}
      </p>

      {filteredUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))
      )}
    </div>
  );
}