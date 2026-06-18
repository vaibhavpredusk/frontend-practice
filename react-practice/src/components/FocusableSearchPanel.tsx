import { useState } from "react";
import { useFocusOnMount } from "../hooks/useFocusOnMount";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type FocusableSearchPanelProps = {
  panelTitle: string;
  placeholder?: string;
};

export function FocusableSearchPanel({
  panelTitle,
  placeholder,
}: FocusableSearchPanelProps) {
  const [query, setQuery] = useState("");

  const { ref } = useFocusOnMount<HTMLInputElement>();

  useDocumentTitle(`${panelTitle} — Hooks Practice`);

  return (
    <div>
      <h2>{panelTitle}</h2>

      <input
        ref={ref}
        type="text"
        value={query}
        placeholder={placeholder ?? "Search users..."}
        onChange={(e) => setQuery(e.target.value)}
      />

      <p>Current query: {query}</p>
    </div>
  );
}