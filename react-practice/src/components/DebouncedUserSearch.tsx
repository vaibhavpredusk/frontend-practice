import { useState } from "react";
import type { User } from "../types/user";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { filterUsers } from "../utils/userFilters";

type DebouncedUserSearchProps = {
  users: User[];
};

export function DebouncedUserSearch({
  users,
}: DebouncedUserSearchProps) {
  const [query, setQuery] = useState("");

  const debouncedQuery =
    useDebouncedValue(query, 300);

  const filteredUsers = filterUsers(
    users,
    debouncedQuery,
    "all",
    false,
  );

  return (
    <div>
      <h2>Debounced User Search</h2>

      <input
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        placeholder="Search users"
      />

      <p>
        Typed: {query}
      </p>

      <p>
        Searching: {debouncedQuery}
      </p>

      {filteredUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}