import type { Task } from "../types/task";

export function normalizeTasks(tasks: Task[]): {
  byId: Record<number, Task>;
  allIds: number[];
}{
    const byId: Record<number, Task> = {};
    const allIds: number[] = [];

    for (const task of tasks) {
        byId[task.id] = task;
        allIds.push(task.id);
    }

    return {
        byId,
        allIds,
    };
}