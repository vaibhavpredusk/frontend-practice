import { useEffect, useRef, useState } from "react";

type Size = {
  width: number;
  height: number;
};

export function ResizeObserverDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];

      setSize({
        width: Math.round(entry.contentRect.width),
        height: Math.round(entry.contentRect.height),
      });
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Resize Observer Demo</h2>

      <p>
        Size: {size.width} × {size.height}
      </p>

      <div
        ref={containerRef}
        style={{
          resize: "both",
          overflow: "auto",
          width: "300px",
          height: "200px",
          border: "2px solid black",
          padding: "16px",
        }}
      >
        Drag the bottom-right corner to resize me.
      </div>
    </div>
  );
}