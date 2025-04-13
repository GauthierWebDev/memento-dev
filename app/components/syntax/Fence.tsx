import { Highlight, Prism } from "prism-react-renderer";
import { prismThemes } from "@/data/themes/prism";
import { useTheme } from "@/hooks/useTheme";
import { Fragment, useMemo } from "react";

import { clientOnly } from "vike-react/clientOnly";

const CSRFence = clientOnly(() => import("./CSRFence"));

function SSRFence({ children, language }: { children: string; language: string }) {
  const { theme } = useTheme();
  const prismTheme = useMemo(() => {
    return prismThemes[theme];
  }, [theme]);

  return (
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
  );
}

export function Fence({ children, language }: { children: string; language: string }) {
  return (
    <div className="relative group">
      <CSRFence language={language} fallback={<SSRFence language={language} children={children} />}>
        {children}
      </CSRFence>
    </div>
  );
}
