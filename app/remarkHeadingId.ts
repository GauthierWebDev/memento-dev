import type { Heading, PhrasingContent } from "mdast";
import type { Plugin } from "unified";
import type { Root } from "mdast";

import { slugifyWithCounter } from "@sindresorhus/slugify";
import { visit } from "unist-util-visit";

type PhrasingContentWithParent = PhrasingContent & {
	children: PhrasingContent[];
};

const doesHaveChildren = (child: PhrasingContent): boolean => {
	return ["delete", "emphasis", "strong", "link", "linkReference"].includes(
		child.type,
	);
};

const setNodeId = (node: Heading, id: string) => {
	if (!node.data) node.data = {};
	if (!node.data.hProperties) node.data.hProperties = {};
	node.data.hProperties.id = id;
};

const extractText = (children: PhrasingContent[]): string => {
	return children
		.map((child) => {
			if (child.type === "text" && child.value.length > 0) {
				return child.value;
			}

			if (
				doesHaveChildren(child) &&
				(child as PhrasingContentWithParent).children.length > 0
			) {
				return extractText((child as PhrasingContentWithParent).children);
			}

			return "";
		})
		.join(" ");
};

const remarkHeadingId: Plugin<[], Root> = () => (tree: Root) => {
	const slugify = slugifyWithCounter();

	visit(tree, "heading", (node) => {
		const lastChild = node.children[node.children.length - 1];

		if (lastChild && lastChild.type === "text") {
			let string = lastChild.value.replace(/ +$/, "");
			const matched = string.match(/ {#(.*?)}$/);

			if (matched) {
				const id = matched[1];

				if (id.length > 0) {
					setNodeId(node, id);

					string = string.substring(0, matched.index);
					lastChild.value = string;
					return;
				}
			}
		}

		const slug = slugify(extractText(node.children));
		setNodeId(node, slug);
	});
};

export default remarkHeadingId;
