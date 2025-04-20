import logoUrl from "@/assets/logo.svg";

/* eslint-disable solid/no-innerhtml */

// https://vike.dev/Head

export default function HeadDefault() {
	return (
		<>
			<link rel="icon" href={logoUrl} />

			<script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.PUBLIC_ENV__GOOGLE_ANALYTICS}`}
			/>
			<script
				innerHTML={`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${import.meta.env.PUBLIC_ENV__GOOGLE_ANALYTICS}');`}
			/>

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin="anonymous"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend:wght@100..900&display=swap"
				rel="stylesheet"
			/>
		</>
	);
}
