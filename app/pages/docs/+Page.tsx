import type { Data } from "./+data";

import { useData } from "vike-react/useData";
import Markdoc from "@markdoc/markdoc";
import nodes from "@/markdoc/nodes";
import tags from "@/markdoc/tags";
import React from "react";

export default function Page() {
  const { doc } = useData<Data>();

  const parsedDoc = Markdoc.parse(doc.content);
  const transformedDoc = Markdoc.transform(parsedDoc, { nodes, tags, variables: {} });

  return Markdoc.renderers.react(transformedDoc, React);
}
