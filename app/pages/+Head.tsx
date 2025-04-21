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

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin="anonymous"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Lexend:wght@400;500;700&display=swap"
				rel="stylesheet"
			/>
		</>
	);
}
