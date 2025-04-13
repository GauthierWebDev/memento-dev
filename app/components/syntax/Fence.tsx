import { clientOnly } from "vike-react/clientOnly";
import { SSRSnippet } from "./SSRSnippet";

const CSRSnippet = clientOnly(() => import("./CSRSnippet"));

export function Fence({ children, language }: { children: string; language: string }) {
  const props = {
    language,
    label: undefined,
    showLineNumbers: false,
    children,
  };

  return (
    <div className="relative group">
      <CSRSnippet {...props} fallback={<SSRSnippet {...props} />} />
    </div>
  );
}
