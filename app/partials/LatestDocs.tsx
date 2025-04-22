import type { Data } from "@/pages/+data";

import QuickLinks from "@/components/QuickLinks";
import { useData } from "vike-solid/useData";
import { For } from "solid-js";

export function LatestDocs() {
	const data = useData<Data>();

	return (
		<section class="bg-violet-200 rounded-md p-4 m-4 lg:m-6">
			<h2 class="font-display text-3xl tracking-tight text-slate-900 text-center">
				Dernières documentations
			</h2>

			<QuickLinks class="!mb-0 !mt-6">
				<For each={data.docs}>
					{(doc) => (
						<QuickLinks.QuickLink
							title={doc.frontmatter?.title || ""}
							description={doc.frontmatter?.description || ""}
							lastEdited={doc.lastEdit}
							href={doc.filePath}
							icon="presets"
						/>
					)}
				</For>
			</QuickLinks>
		</section>
	);
}
