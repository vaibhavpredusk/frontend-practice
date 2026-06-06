import type { Task, TaskStatus } from "../types/task";

type TaskItemProps = {
  task: Task;
  onStatusChange: (taskId: number, status: TaskStatus) => void;
};

export function TaskItem({
  task,
  onStatusChange,
}: TaskItemProps) {
  return (
    <li>
      <p>
        <strong>{task.title}</strong>
      </p>

      <p>Status: {task.status}</p>

      <select
        value={task.status}
        onChange={(e) =>
          onStatusChange(
            task.id,
            e.target.value as TaskStatus,
          )
        }
      >
        <option value="pending">pending</option>
        <option value="in_progress">
          in_progress
        </option>
        <option value="done">done</option>
      </select>
    </li>
  );
}