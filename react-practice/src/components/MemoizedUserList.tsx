import { memo, useCallback, useMemo, useRef, useState,} from "react";
import type { User } from "../types/user";
import { usePrevious } from "../hooks/usePrevious";
import {computeUserStats,} from "../utils/expensiveUserStats";

type UserRowProps = {
  user: User;
  onSelect: (userId: number) => void;
};

const UserRow = memo(function UserRow({
  user,
  onSelect,
}: UserRowProps) {
  const renderCountRef = useRef(0);

  renderCountRef.current += 1;

  return (
    <li>
      <button
        onClick={() => onSelect(user.id)}
      >
        Select
      </button>

      {" "}
      {user.name}
      {" "}
      ({user.role})

      {" | Active: "}
      {user.isActive ? "Yes" : "No"}

      {" | Row renders: "}
      {renderCountRef.current}
    </li>
  );
});

type MemoizedUserListProps = {
  users: User[];
};

export function MemoizedUserList({
  users,
}: MemoizedUserListProps) {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const [tick, setTick] = useState(0);

  const previousSelection = usePrevious(selectedUserId);

  const stats = useMemo(
    () => computeUserStats(users),
    [users],
  );

  const handleSelect = useCallback(
    (userId: number) => {
      setSelectedUserId(userId);
    },
    [],
  );

  return (
    <div>
      <h2>Memoized User List</h2>

      <button
        onClick={() =>
          setTick((t) => t + 1)
        }
      >
        Tick
      </button>

      <p>Tick: {tick}</p>

      <hr />

      <h3>Statistics</h3>

      <p>
        Total Users: {stats.total}
      </p>

      <p>
        Active Users:
        {" "}
        {stats.activeCount}
      </p>

      <p>
        Admins:
        {" "}
        {stats.roleCounts.admin}
      </p>

      <p>
        Annotators:
        {" "}
        {stats.roleCounts.annotator}
      </p>

      <p>
        Verifiers:
        {" "}
        {stats.roleCounts.verifier}
      </p>

      <hr />

      <p>
        Selected User:
        {" "}
        {selectedUserId ?? "None"}
      </p>

      <p>
        Previous Selection:
        {" "}
        {previousSelection ?? "None"}
      </p>

      <hr />

      <ul>
        {users.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            onSelect={handleSelect}
          />
        ))}
      </ul>
    </div>
  );
}