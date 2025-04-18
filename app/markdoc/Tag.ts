import type { RenderableTreeNode } from "@markdoc/markdoc";
import type { ReactNode } from "react";

import { Tag as MarkdocTag } from "@markdoc/markdoc";

export class Tag extends MarkdocTag {
  constructor(name: string | ReactNode, attributes: Record<string, any>, children: RenderableTreeNode[]) {
    // Workaround for TypeScript's type system
    super(name as unknown as string, attributes, children);
  }
}
