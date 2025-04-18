import type { RenderableTreeNode } from "@markdoc/markdoc";
import type { ReactNode } from "react";

import Markdoc from "@markdoc/markdoc";

type TagAttributesValue = string | number | boolean | null | undefined | object | unknown;

// Workaround for Markdoc, that's not exporting the type
// in production build (Vite issue).
// See: https://stackoverflow.com/questions/76191154/the-requested-module-does-not-provide-an-export-named-default
const { Tag: MarkdocTag } = Markdoc;

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
