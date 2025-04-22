import { usePageContext } from "vike-solid/usePageContext";
import blurCyanImage from "@/images/blur-cyan.webp";
import { buildPublicUrl } from "@/buildPublicUrl";
import logoUrl from "@/assets/logo.svg";

// https://vike.dev/Head

export default function HeadDefault() {
	const pageContext = usePageContext();

	const getCanonicalUrl = () => {
		return buildPublicUrl(pageContext, pageContext.urlParsed.pathname);
	};

	return (
		<>
			<link rel="icon" href={logoUrl} />

			<link rel="canonical" href={getCanonicalUrl()} />

			<script
				defer
				src="https://cloud.umami.is/script.js"
				data-website-id="ba70261e-d145-4dd1-b0e8-27cbf4927b74"
			/>

			<link rel="preload" href={blurCyanImage} as="image" />

			<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
			<link rel="dns-prefetch" href="https://fonts.gstatic.com" />

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin="anonymous"
			/>

			<meta property="og:type" content="siteweb" />
			<meta property="og:url" content={getCanonicalUrl()} />

			<link
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Lexend:wght@400;500;700&display=swap"
				rel="stylesheet"
			/>
		</>
	);
}
