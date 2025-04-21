import { title } from "./+title";

export default function buildTitle(pageTitle?: string) {
	return pageTitle || title();
}
