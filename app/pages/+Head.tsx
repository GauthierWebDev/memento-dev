import blurCyanImage from "@/images/blur-cyan.webp";
import logoUrl from "@/assets/logo.svg";

// https://vike.dev/Head

export default function HeadDefault() {
	return (
		<>
			<link rel="icon" href={logoUrl} />

			<script
				defer
				src="https://cloud.umami.is/script.js"
				data-website-id="ba70261e-d145-4dd1-b0e8-27cbf4927b74"
			/>

			<link rel="preload" href={blurCyanImage} as="image" />
			<link
				rel="preload"
				href="https://fonts.gstatic.com/s/inter/v12/UcCO3F1r8g.woff2"
				as="font"
				type="font/woff2"
				crossorigin="anonymous"
			/>

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin="anonymous"
			/>
			<link rel="dns-prefetch" href="https://fonts.gstatic.com" />

			<link
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Lexend:wght@400;500;700&display=swap"
				rel="stylesheet"
			/>
		</>
	);
}
