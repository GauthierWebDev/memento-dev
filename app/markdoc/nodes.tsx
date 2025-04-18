import type { Config, Node } from "@markdoc/markdoc";

import { slugifyWithCounter } from "@sindresorhus/slugify";
import { nodes as defaultNodes } from "@markdoc/markdoc";
import { DocsLayout } from "@syntax/DocsLayout";
import { Link } from "@/components/common/Link";
import { Fence } from "@syntax/Fence";
import { Tag } from "./Tag";
import yaml from "js-yaml";

const documentSlugifyMap = new Map();

const nodes = {
  document: {
    ...defaultNodes.document,
    render: DocsLayout,
    transform(node: Node, config: Config) {
      documentSlugifyMap.set(config, slugifyWithCounter());

      return new Tag(
        this.render as unknown as string,
        {
          frontmatter: yaml.load(node.attributes.frontmatter),
          estimatedReadingTime: config?.variables?.estimatedReadingTime,
          nodes: node.children,
        },
        node.transformChildren(config),
      );
    },
  },
  heading: {
    ...defaultNodes.heading,
    transform(node: Node, config: Config) {
      const slugify = documentSlugifyMap.get(config);
      const attributes = node.transformAttributes(config);
      const children = node.transformChildren(config);
      const text = children.filter((child) => typeof child === "string").join(" ");
      const id = attributes.id ?? slugify(text);

      return new Tag(`h${node.attributes.level}`, { ...attributes, id }, children);
    },
  },
  strong: {
    ...defaultNodes.strong,
    attributes: {
      ...defaultNodes.strong.attributes,
      class: {
        type: String,
        default: "font-semibold text-slate-800 dark:text-slate-200",
      },
    },
  },
  table: {
    ...defaultNodes.table,
    attributes: {
      ...defaultNodes.table.attributes,
      class: {
        type: String,
        default: "block max-w-full overflow-x-auto border-collapse text-sm",
      },
    },
  },
  th: {
    ...defaultNodes.th,
    attributes: {
      ...defaultNodes.th.attributes,
      scope: {
        type: String,
        default: "col",
      },
    },
  },
  fence: {
    render: Fence,
    attributes: {
      language: {
        type: String,
      },
    },
  },
  link: {
    ...defaultNodes.link,
    render: Link,
  },
};

export default nodes;
