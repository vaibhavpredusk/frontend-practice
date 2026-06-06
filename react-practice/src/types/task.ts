export type TaskStatus = "pending" | "in_progress" | "done";

export type Task = {
  id: number;
  title: string;
  status: "pending" | "in_progress" | "done";
};