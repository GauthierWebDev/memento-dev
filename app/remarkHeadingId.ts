import type { Heading, PhrasingContent } from "mdast";
import type { Section } from "./libs/sections";
import type { Program } from "estree-jsx";
import type { Plugin } from "unified";
import type { Root } from "mdast";

import { slugifyWithCounter } from "@sindresorhus/slugify";
import { visit } from "unist-util-visit";

type PhrasingContentWithParent = PhrasingContent & {
	children: PhrasingContent[];
};

export type TableOfContents = Array<Section>;

interface MDXJSEsm {
	type: "mdxjsEsm";
	value: string;
	data?: {
		estree?: Program;
	};
}

const tableOfContents: TableOfContents = [];

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

const formatExportNode = (): MDXJSEsm => {
	return {
		type: "mdxjsEsm",
		value: `export const tableOfContents = ${JSON.stringify(tableOfContents)};`,
		data: {
			estree: {
				type: "Program",
				body: [
					{
						type: "ExportNamedDeclaration",
						declaration: {
							type: "VariableDeclaration",
							kind: "const",
							declarations: [
								{
									type: "VariableDeclarator",
									id: {
										type: "Identifier",
										name: "tableOfContents",
									},
									init: {
										type: "ArrayExpression",
										elements: tableOfContents.map((section) => ({
											type: "ObjectExpression",
											properties: [
												{
													type: "Property",
													key: {
														type: "Identifier",
														name: "id",
													},
													value: {
														type: "Literal",
														value: section.id,
													},
													kind: "init",
													computed: false,
													method: false,
													shorthand: false,
												},
												{
													type: "Property",
													key: {
														type: "Identifier",
														name: "title",
													},
													value: {
														type: "Literal",
														value: section.title,
													},
													kind: "init",
													computed: false,
													method: false,
													shorthand: false,
												},
												{
													type: "Property",
													key: {
														type: "Identifier",
														name: "level",
													},
													value: {
														type: "Literal",
														value: section.level,
													},
													kind: "init",
													computed: false,
													method: false,
													shorthand: false,
												},
												{
													type: "Property",
													key: {
														type: "Identifier",
														name: "path",
													},
													value: {
														type: "Literal",
														value: section.path,
													},
													kind: "init",
													computed: false,
													method: false,
													shorthand: false,
												},
											],
										})),
									},
								},
							],
						},
						specifiers: [],
						source: null,
					},
				],
				sourceType: "module",
			} as unknown as Program,
		},
	};
};

const remarkHeadingId: Plugin<[], Root> = () => (tree: Root, file) => {
	const slugify = slugifyWithCounter();

	visit(tree, "heading", (node) => {
		const lastChild = node.children[node.children.length - 1];

		const filePath = file.path;
		console.log(`File path: ${filePath}`);

		if (lastChild && lastChild.type === "text") {
			const string = lastChild.value.replace(/ +$/, "");
			const matched = string.match(/ {#(.*?)}$/);

			if (matched) return;
		}

		const slug = slugify(extractText(node.children));
		setNodeId(node, slug);

		const depth = node.depth as 2 | 3;
		if (depth > 3) return;

		tableOfContents.push({
			id: slug,
			title: extractText(node.children),
			level: depth,
			path: filePath,
		});
	});

	const exportNode = formatExportNode();
	tree.children.push(exportNode);
};

export default remarkHeadingId;
