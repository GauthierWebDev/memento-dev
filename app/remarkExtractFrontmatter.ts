import type { Program } from "estree-jsx";
import type { Plugin } from "unified";
import type { VFile } from "vfile";
import type { Root } from "mdast";

import { readingTime } from "reading-time-estimator";
import { visit } from "unist-util-visit";
import yaml from "js-yaml";

export interface Frontmatter {
	title: string;
	description: string;
	tags: string[];
}

interface MDXJSEsm {
	type: "mdxjsEsm";
	value: string;
	data?: {
		estree?: Program;
	};
}

interface CustomVFile extends VFile {
	data: {
		frontmatter?: Frontmatter;
		readingTime?: ReturnType<typeof readingTime>;
		[key: string]: unknown;
	};
}

const remarkExtractFrontmatter: Plugin<[], Root> =
	() => (tree: Root, file: CustomVFile) => {
		visit(tree, "yaml", (node) => {
			try {
				const data = (yaml.load(node.value) as Frontmatter) || {};

				const fileContent = file.toString();
				const estimatedReadingTime = readingTime(fileContent, 300, "fr");

				// Ajout du frontmatter au fichier virtual de remark
				file.data.frontmatter = data;

				// Ajout du temps de lecture au fichier virtual de remark
				file.data.readingTime = estimatedReadingTime;

				// Créer un noeud export pour le frontmatter
				const exportNode: MDXJSEsm = {
					type: "mdxjsEsm",
					value: `export const frontmatter = ${JSON.stringify(data)}; export const readingTime = ${JSON.stringify(estimatedReadingTime)};`,
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
													name: "frontmatter",
												},
												init: {
													type: "ObjectExpression",
													properties: Object.entries(data).map(
														([key, value]) => ({
															type: "Property",
															key: {
																type: "Identifier",
																name: key,
															},
															value: {
																type: "Literal",
																value: value,
															},
															kind: "init",
															computed: false,
															method: false,
															shorthand: false,
														}),
													),
												},
											},
											{
												type: "VariableDeclarator",
												id: {
													type: "Identifier",
													name: "readingTime",
												},
												init: {
													type: "ObjectExpression",
													properties: Object.entries(estimatedReadingTime).map(
														([key, value]) => ({
															type: "Property",
															key: {
																type: "Identifier",
																name: key,
															},
															value: {
																type: "Literal",
																value: value,
															},
															kind: "init",
															computed: false,
															method: false,
															shorthand: false,
														}),
													),
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

				tree.children.push(exportNode);
			} catch (e) {
				console.error("Error parsing frontmatter:", e);
			}
		});
	};

export default remarkExtractFrontmatter;
