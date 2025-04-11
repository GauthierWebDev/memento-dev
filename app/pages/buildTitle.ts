import { title } from "./+title";
import config from "./+config";

export default function buildTitle(pageTitle?: string) {
  if (!pageTitle) return title();
  return `${pageTitle} - ${config.title}`;
}
