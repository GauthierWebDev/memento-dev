import type { Data } from "@/pages/docs/+data";

import { clientOnly } from "vike-react/clientOnly";
import { useData } from "vike-react/useData";
import { SSRSnippet } from "./SSRSnippet";

const CSRSnippet = clientOnly(() => import("./CSRSnippet"));

export function Snippet({
  path,
  language,
  label,
  showLineNumbers,
}: {
  path: string;
  language: string;
  label?: string;
  showLineNumbers: boolean;
}) {
  const { snippets } = useData<Data>();

  const snippet = snippets.find((snippet) => snippet.path === path);
  if (!snippet || !snippet.content) return null;

  const props = {
    language,
    label,
    showLineNumbers,
    children: snippet.content,
  };

  return (
    <div className="relative group">
      <CSRSnippet {...props} fallback={<SSRSnippet {...props} />} />
    </div>
  );
}
