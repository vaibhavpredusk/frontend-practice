import type { User } from "../types/user";

export const sampleUsers: User[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav@example.com",
    role: "admin",
    isActive: true,
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@example.com",
    role: "annotator",
    isActive: true,
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul@example.com",
    role: "verifier",
    isActive: false,
  },
  {
    id: 4,
    name: "Sneha Gupta",
    email: "sneha@example.com",
    role: "annotator",
    isActive: false,
  },
];