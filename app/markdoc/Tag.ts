// Workaround about undefined import only in production build

import type { RenderableTreeNode } from "@markdoc/markdoc";

export class Tag<N extends string = string, A extends Record<string, any> = Record<string, any>> {
  readonly $$mdtype = "Tag" as const;

  static isTag = (tag: any): tag is Tag => {
    return !!(tag?.$$mdtype === "Tag");
  };

  name: N;
  attributes: A;
  children: RenderableTreeNode[];

  constructor(name = "div" as N, attributes = {} as A, children: RenderableTreeNode[] = []) {
    this.name = name;
    this.attributes = attributes;
    this.children = children;
  }
}
