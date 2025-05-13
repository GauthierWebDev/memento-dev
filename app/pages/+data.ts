import type { PageContext } from "vike/types";

import { useConfig } from "vike-solid/useConfig";
import { docCache } from "@/services/DocCache";
import buildTitle from "./buildTitle";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(pageContext: PageContext) {
  const config = useConfig();
  await docCache.waitingForCache(20000);

  const {
    exports: { frontmatter },
    urlParsed,
  } = pageContext;
  const isRoot = urlParsed.pathname === "/";

  config({
    title: buildTitle(isRoot ? undefined : frontmatter?.title),
    description: frontmatter?.description,
  });

  let cachePathname = urlParsed.pathname.replace(/\/$/, "").replace(/^\//, "");
  if (cachePathname === "") cachePathname = "index";

  const doc = docCache.get(cachePathname);
  console.log(doc);

  if (!doc) {
    console.error(
      `DocCache: No doc found for ${cachePathname}. This is a bug!`,
      "Please report it to the maintainers.",
    );
  }

  return {
    sections: doc?.sections || [],
    frontmatter,
    docs: docCache.orderByLastEdit({
      limit: 2,
      includedBasePaths: ["docs", "certifications"],
      excludedFileNames: [cachePathname, "docs", "certifications"],
    }),
  };
}
