import type { User } from "../types/user";
import { isUser } from "./typeGuards";

export function parseUser(input: unknown): User | null {
  return isUser(input) ? input : null;
}