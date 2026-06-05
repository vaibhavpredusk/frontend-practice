import type { Task, TaskStatus } from "../types/task";

export type TaskStatusFilter = "all" | TaskStatus;

export function filterTasksByStatus(
  tasks: Task[],
  status: TaskStatusFilter,
): Task[];

export function updateTaskStatus(
  tasks: Task[],
  taskId: number,
  status: TaskStatus,
): Task[];