import { prismThemes } from "@/data/themes/prism";
import { Highlight } from "prism-react-renderer";
import { useTheme } from "@/hooks/useTheme";
import { Fragment, useMemo } from "react";

export function Fence({ children, language }: { children: string; language: string }) {
  const { theme } = useTheme();

  const prismTheme = useMemo(() => {
    return prismThemes[theme];
  }, [theme]);

  return (
    <Highlight code={children.trimEnd()} language={language} theme={prismTheme}>
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
  );
}
