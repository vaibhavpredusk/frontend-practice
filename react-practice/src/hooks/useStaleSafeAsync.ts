import { useCallback, useRef, useState } from "react";
import type { AsyncRunStatus } from "../types/timer";

function delay(ms: number): Promise<void> {
    console.log("delay started");
    return new Promise((resolve) => {
    setTimeout(()=>{
        console.log("delay resolved");
    resolve()} , ms);
  });
}

export function useStaleSafeAsync(): {
  status: AsyncRunStatus;
  resultLabel: string | null;
  errorMessage: string | null;
  runFast: () => Promise<void>;
  runSlow: () => Promise<void>;
  cancel: () => void;
} {
  const [status, setStatus] = useState<AsyncRunStatus>("idle");

  const [resultLabel, setResultLabel] = useState<string | null>(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const requestIdRef = useRef(0);

  const mountedRef = useRef(true);

  const runRequest = useCallback(
    async (
      duration: number, 
      label: string,
    ): Promise<void> => {
        console.log("runRequest started", duration, label);
      requestIdRef.current += 1;

      const requestId =
        requestIdRef.current;

      setStatus("loading");
      setErrorMessage(null);
      setResultLabel(null);

      try {
        console.log("before delay");
        await delay(duration);
        console.log("after delay");
        if (!mountedRef.current) {
          return;
        }

        if (
          requestId !==
          requestIdRef.current
        ) {
          return;
        }

        setStatus("success");
        setResultLabel(label);
      } catch {
        if (!mountedRef.current) {
          return;
        }

        setStatus("error");
        setErrorMessage(
          "Something went wrong",
        );
      }
    },
    [],
  );

  const runFast = useCallback(async () =>{
        console.log("runfast clicked");
        return runRequest(300, "Fast response", )
    },[runRequest],
  );

  const runSlow = useCallback(
    () =>
      runRequest(
        2000,
        "Slow response",
      ),
    [runRequest],
  );

  const cancel = useCallback(() => {
    requestIdRef.current += 1;

    setStatus("idle");
    setResultLabel(null);
    setErrorMessage(null);
  }, []);

  return {
    status,
    resultLabel,
    errorMessage,
    runFast,
    runSlow,
    cancel,
  };
}