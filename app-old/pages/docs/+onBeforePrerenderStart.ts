import { docsService } from "@/services/DocsService";

export async function onBeforePrerenderStart() {
  const allDocumentations = await docsService.getUrls("docs");
  return allDocumentations;
}
