import type { PageContext } from "vike/types";

import { docsService } from "@/services/DocsService";
import { readingTime } from "reading-time-estimator";
import { useConfig } from "vike-react/useConfig";
import buildTitle from "@/pages/buildTitle";
import { render } from "vike/abort";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(pageContext: PageContext) {
  const config = useConfig();

  const { key } = pageContext.routeParams;

  const doc = await docsService.getDoc("docs", key);

  if (!doc) {
    throw render(404);
  }

  const readingTimeObject = readingTime(doc.content, 300, "fr");

  config({
    title: buildTitle(doc.title),
    description: doc.description,
  });

  docsService.transform(doc);

  return { doc, estimatedReadingTime: readingTimeObject.text };
}
