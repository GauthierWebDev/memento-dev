import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { prismThemes } from "@/data/themes/prism";
import { Highlight } from "prism-react-renderer";
import { useTheme } from "@/hooks/useTheme";
import { Fragment, useMemo } from "react";
import { toast } from "react-toastify";
import { Button } from "./Button";
import Prism from "prismjs";
import clsx from "clsx";

export default function CSRSnippet({
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children.trimEnd());
    toast.success("Code copié dans le presse-papier");
  };

  return (
    <>
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

      <Button
        className={clsx(
          "absolute right-2 w-8 h-8 aspect-square opacity-0 group-hover:opacity-50 hover:opacity-100 transition-opacity",
          !!label ? "top-10" : "top-2",
        )}
        size="sm"
        variant="secondary"
        onClick={copyToClipboard}
      >
        <ClipboardDocumentIcon className="w-full" />
      </Button>
    </>
  );
}
