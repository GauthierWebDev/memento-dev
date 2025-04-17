import type { PageContext } from "vike/types";

import { snippetsService } from "@/services/SnippetsService";
import { findNavigationLink } from "@/lib/navigation";
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
  const link = findNavigationLink("docs", key);

  if (!doc) {
    throw render(404);
  }

  const readingTimeObject = readingTime(doc.content, 300, "fr");

  config({
    title: buildTitle(doc.title),
    description: doc.description,
    image: link?.og?.image || "notfound",
  });

  docsService.transform(doc);

  const snippets = Array.from(doc.snippets).map((snippetPath) => ({
    path: snippetPath,
    content: snippetsService.getFromCache(snippetPath),
  }));

  return { doc, estimatedReadingTime: readingTimeObject.text, snippets };
}
