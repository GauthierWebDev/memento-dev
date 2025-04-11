import { type Node } from "@markdoc/markdoc";

import { TableOfContents } from "@syntax/TableOfContents";
import { PrevNextLinks } from "@syntax/PrevNextLinks";
import { collectSections } from "@/lib/sections";
import { DocsHeader } from "@syntax/DocsHeader";
import { Prose } from "@syntax/Prose";

export function DocsLayout({
  children,
  frontmatter: { title },
  nodes,
}: {
  children: React.ReactNode;
  frontmatter: { title?: string };
  nodes: Array<Node>;
}) {
  let tableOfContents = collectSections(nodes);

  return (
    <>
      <div className="max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
        <article>
          <DocsHeader title={title} />
          <Prose>{children}</Prose>
        </article>
        <PrevNextLinks />
      </div>

      <TableOfContents tableOfContents={tableOfContents} />
    </>
  );
}
