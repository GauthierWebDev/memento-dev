import type { PageContext } from "vike/types";

import { buildPublicUrl } from "@/buildPublicUrl";

export const image = (pageContext: PageContext) => {
	return buildPublicUrl(pageContext, "/opengraph/react.png");
};
