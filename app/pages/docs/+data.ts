import type { PageContext } from "vike/types";

import { docsService } from "@/services/DocsService";
import { useConfig } from "vike-react/useConfig";
import Markdoc from "@markdoc/markdoc";
import { render } from "vike/abort";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(pageContext: PageContext) {
  const config = useConfig();

  const { key } = pageContext.routeParams;

  const doc = await docsService.getDoc("docs", key);

  if (!doc) {
    throw render(404);
  }

  config({
    title: doc.title,
    description: doc.description,
  });

  docsService.transform(doc);

  return { doc };
}
