import { type Node } from "@markdoc/markdoc";

import { TableOfContents } from "@syntax/TableOfContents";
import { PrevNextLinks } from "@/components/PrevNextLinks";
import { collectSections } from "@/lib/sections";
import { DocsHeader } from "@syntax/DocsHeader";
import { Prose } from "@/components/Prose";

export function DocsLayout({
	children,
	frontmatter: { title },
	estimatedReadingTime,
	nodes,
}: {
	children: React.ReactNode;
	frontmatter: { title?: string };
	estimatedReadingTime?: string;
	nodes: Array<Node>;
}) {
	const tableOfContents = collectSections(nodes);

	return (
		<>
			<div class="max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16 grow">
				<article>
					<DocsHeader
						title={title}
						estimatedReadingTime={estimatedReadingTime}
					/>
					<Prose>{children}</Prose>
				</article>
				<PrevNextLinks />
			</div>

			<TableOfContents tableOfContents={tableOfContents} />
		</>
	);
}
