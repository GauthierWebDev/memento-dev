import type { RenderableTreeNode } from "@markdoc/markdoc";
import type { ReactNode } from "react";

import { Tag as MarkdocTag } from "@markdoc/markdoc";

type TagAttributesValue = string | number | boolean | null | undefined | object | unknown;

export class Tag extends MarkdocTag {
  constructor(
    name: string | ReactNode,
    attributes: Record<string, TagAttributesValue>,
    children: RenderableTreeNode[],
  ) {
    // Workaround for TypeScript's type system
    super(name as unknown as string, attributes, children);
  }
}
