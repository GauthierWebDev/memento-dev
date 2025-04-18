import type { Data } from "@/pages/docs/+data";

import { clientOnly } from "vike-react/clientOnly";
import { useData } from "vike-react/useData";
import { SSRSnippet } from "./SSRSnippet";
import React from "react";

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

  if (!snippet || !snippet.content) {
    return (
      <div className="bg-red-600/10 p-4 rounded-md flex items-center justify-center">
        <p className="text-red-500 text-center">
          <b className="uppercase">Snippet introuvable</b>
          <br />
          <code>{path}</code>
        </p>
      </div>
    );
  }

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
