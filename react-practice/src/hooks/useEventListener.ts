import { useEffect, useRef } from "react";

type EventTargetType =
  | Window | Document | HTMLElement;

export function useEventListener<K extends keyof WindowEventMap>(
  target: EventTargetType,
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
): void {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = (
      event: WindowEventMap[K],
    ) => {
      handlerRef.current(event);
    };

    target.addEventListener(
      eventName,
      listener as EventListener,
      options,
    );

    return () => {
      target.removeEventListener(
        eventName,
        listener as EventListener,
        options,
      );
    };
  }, [target, eventName, options]);
}