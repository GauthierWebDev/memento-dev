import { Highlight, Prism } from "prism-react-renderer";
import { prismThemes } from "@/data/themes/prism";
import { useTheme } from "@/hooks/useTheme";
import { Fragment, useMemo } from "react";
import clsx from "clsx";

export function SSRSnippet({
  children,
  language,
  label,
  showLineNumbers = false,
}: {
  children: string;
  language: string;
  label?: string;
  showLineNumbers?: boolean;
}) {
  const { theme } = useTheme();
  const prismTheme = useMemo(() => {
    return prismThemes[theme];
  }, [theme]);

  return (
    <Highlight code={children.trimEnd()} language={language} theme={prismTheme} prism={Prism}>
      {({ className, style, tokens, getTokenProps }) => (
        <div className="relative w-full">
          {label && (
            <div className="absolute px-4 py-1 left-0 text-sm text-gray-700 dark:text-gray-200 italic w-full bg-gray-200 dark:bg-gray-700 rounded-t-xl">
              {label}
            </div>
          )}
          <pre className={clsx(className, { "pt-11": !!label })} style={style}>
            <code>
              {tokens.map((line, lineIndex) => (
                <Fragment key={lineIndex}>
                  {showLineNumbers && (
                    <span
                      className="text-gray-400 dark:text-gray-500 text-right font-mono w-8 inline-block pr-4"
                      style={{ userSelect: "none" }}
                    >
                      {lineIndex + 1}
                    </span>
                  )}
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
        </div>
      )}
    </Highlight>
  );
}
