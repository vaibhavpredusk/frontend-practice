import { useEffect, useRef, useState } from "react";
import { useEventListener } from "../hooks/useEventListener";

export function WindowShortcutHint() {
  const [message, setMessage] = useState(
    "Press ? to show help",
  );

  const timeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );

  useEventListener(
    window,
    "keydown",
    (event) => {
      if (
        event.key === "?" &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey
      ) {
        setMessage(
          "Shortcut help: Ctrl+S save, Esc cancel",
        );

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setMessage(
            "Press ? to show help",
          );
        }, 3000);
      }
    },
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h2>Keyboard Shortcuts</h2>
      <p>{message}</p>
    </div>
  );
}