import { useState } from "react";
import type { LoadState, SimulatedUser,} from "../types/api";

export function delay(ms: number,): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function useSimulatedUser(): {
  state: LoadState;
  user: SimulatedUser | null;
  errorMessage: string | null;
  loadSuccess: () => Promise<void>;
  loadFailure: () => Promise<void>;
  reset: () => void;
} {
  const [state, setState] = useState<LoadState>("idle");

  const [user, setUser] = useState<SimulatedUser | null>(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function loadSuccess() {
    setState("loading");
    await delay(500);
    setUser({
      id: 1,
      name: "Demo User",
    });

    setErrorMessage(null);
    setState("success");
  }

  async function loadFailure() {
    setState("loading");
    await delay(500);
    setUser(null);
    setErrorMessage(
      "Simulated network error",
    );

    setState("error");
  }

  function reset() {
    setState("idle");
    setUser(null);
    setErrorMessage(null);
  }

  return {
    state,
    user,
    errorMessage,
    loadSuccess,
    loadFailure,
    reset,
  };
}