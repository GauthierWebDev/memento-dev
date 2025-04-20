import { config } from "@/config";

export function buildPublicUrl(resource: string) {
	const { BASE_URL } = config;

	if (BASE_URL) {
		return new URL(resource, BASE_URL).toString();
	}

	return resource;
}
