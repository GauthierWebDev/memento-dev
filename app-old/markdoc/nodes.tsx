import type { Config, Node } from "@markdoc/markdoc";

import { slugifyWithCounter } from "@sindresorhus/slugify";
import { DocsLayout } from "@syntax/DocsLayout";
import { Link } from "@/components/common/Link";
import Markdoc from "@markdoc/markdoc";
import { Fence } from "@syntax/Fence";
import { Tag } from "./Tag";
import yaml from "js-yaml";

const documentSlugifyMap = new Map();

const nodes = {
  document: {
    ...Markdoc.nodes.document,
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
    ...Markdoc.nodes.heading,
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
    ...Markdoc.nodes.strong,
    attributes: {
      ...Markdoc.nodes.strong.attributes,
      class: {
        type: String,
        default: "font-semibold text-slate-800 dark:text-slate-200",
      },
    },
  },
  table: {
    ...Markdoc.nodes.table,
    attributes: {
      ...Markdoc.nodes.table.attributes,
      class: {
        type: String,
        default: "block max-w-full overflow-x-auto border-collapse text-sm",
      },
    },
  },
  th: {
    ...Markdoc.nodes.th,
    attributes: {
      ...Markdoc.nodes.th.attributes,
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
    ...Markdoc.nodes.link,
    render: Link,
  },
};

export default nodes;
