import type { Data } from "@/pages/docs/+data";

import { snippetsService } from "@/services/SnippetsService";
import { Highlight, Prism } from "prism-react-renderer";
import { clientOnly } from "vike-react/clientOnly";
import { prismThemes } from "@/data/themes/prism";
import { useData } from "vike-react/useData";
import { useTheme } from "@/hooks/useTheme";
import { Fragment, useMemo } from "react";

const CSRSnippet = clientOnly(() => import("./CSRSnippet"));

function SSRSnippet({
  language,
  children,
  label,
  showLineNumbers = false,
}: {
  language: string;
  children: string;
  label?: string;
  showLineNumbers?: boolean;
}) {
  const { theme } = useTheme();

  const prismTheme = useMemo(() => {
    return prismThemes[theme];
  }, [theme]);

  return (
    <>
      {label && <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{label}</div>}
      <Highlight code={children.trimEnd()} language={language} theme={prismTheme} prism={Prism}>
        {({ className, style, tokens, getTokenProps }) => (
          <pre className={className} style={style}>
            <code>
              {tokens.map((line, lineIndex) => (
                <Fragment key={lineIndex}>
                  {line
                    .filter((token) => !token.empty)
                    .map((token, tokenIndex) => (
                      <span key={tokenIndex} {...getTokenProps({ token })} />
                    ))}
                  {"\n"}
                </Fragment>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </>
  );
}

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
