export type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "annotator" | "verifier";
  isActive: boolean;
};

export type ApiResponse<T> = {
  data: T;
  message: string;
  success: boolean;
};