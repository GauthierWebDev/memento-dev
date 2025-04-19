import type { Root, Literal } from "mdast";
import type { Program } from "estree-jsx";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

import { visit } from "unist-util-visit";
import yaml from "js-yaml";

// Type pour le frontmatter
export interface Frontmatter {
	title?: string;
	description?: string;
	date?: string;
	tags?: string[];
	[key: string]: unknown;
}

// Interface pour le noeud YAML
interface YamlNode extends Literal {
	type: "yaml";
	value: string;
}

// Interface pour le noeud MDX ESM
interface MDXJSEsm {
	type: "mdxjsEsm";
	value: string;
	data?: {
		estree?: Program;
	};
}

// Type pour la VFile avec données personnalisées
interface CustomVFile extends VFile {
	data: {
		frontmatter?: Frontmatter;
		[key: string]: unknown;
	};
}

const remarkExtractFrontmatter: Plugin<[], Root> =
	() => (tree: Root, file: CustomVFile) => {
		visit(tree, "yaml", (node: YamlNode) => {
			try {
				const data = (yaml.load(node.value) as Frontmatter) || {};

				// Ajout du frontmatter au fichier virtual de remark
				file.data.frontmatter = data;

				// Créer un noeud export pour le frontmatter
				const exportNode: MDXJSEsm = {
					type: "mdxjsEsm",
					value: `export const frontmatter = ${JSON.stringify(data)};`,
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
