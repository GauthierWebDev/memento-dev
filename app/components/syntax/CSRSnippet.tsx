import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { prismThemes } from "@/data/themes/prism";
import { Highlight } from "prism-react-renderer";
import { useTheme } from "@/hooks/useTheme";
import { Fragment, useMemo } from "react";
import { toast } from "react-toastify";
import { Button } from "./Button";
import Prism from "prismjs";

export default function CSRFence({ children, language }: { children: string; language: string }) {
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

      <Button
        className="absolute top-2 right-2 w-8 h-8 aspect-square opacity-0 group-hover:opacity-50 hover:opacity-100 transition-opacity"
        size="sm"
        variant="secondary"
        onClick={copyToClipboard}
      >
        <ClipboardDocumentIcon className="w-full" />
      </Button>
    </>
  );
}
