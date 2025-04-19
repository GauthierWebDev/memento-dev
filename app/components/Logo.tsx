import type { JSX } from "solid-js";

import { createUniqueId } from "solid-js";

function LogomarkPaths() {
	const id = createUniqueId();

	return (
		<>
			<defs>
				<linearGradient
					id={id}
					x1="0"
					y1="0"
					x2="1"
					y2="0"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(12.792,-21.32,-21.32,-12.792,5.208,23.32)"
				>
					<stop offset="0" stop-color="rgb(43,127,255)" />
					<stop offset="1" stop-color="rgb(142,81,255)" />
				</linearGradient>
			</defs>

			<g transform="matrix(-1.76727,0,0,1.76727,49.1089,-3.53454)">
				<path
					d="M16.161,18.989L20.49,23.32L21.9,21.91L2.1,2.1L0.69,3.51L2.714,5.535L-4.085,11.253L-4.085,13.054L3.185,19.167L4.629,17.337L-1.61,12.165L4.397,7.219L9.588,12.412L6,16L6.01,16.01L6,16.01L6,22L18,22L18,20.83L16.161,18.989ZM14.417,17.244L16,18.83L16,20L8,20L8,16.5L10.837,13.663L14.417,17.244ZM8,4L16,4L16,7.5L13.16,10.34L14.41,11.59L18,8.01L17.99,8L18,8L18,2L6,2L6,3.17L8,5.17L8,4ZM25.294,12.164L19.071,17.34L20.542,19.164L27.788,13.075L27.788,11.274L20.597,5.22L19.158,7.075L25.294,12.164Z"
					style={{ fill: `url(#${id})` }}
				/>
			</g>
		</>
	);
}

export function Logo(props: JSX.IntrinsicElements["svg"]) {
	return (
		<svg view-box="0 0 58 38" {...props}>
			<title>Memento Dev</title>
			<LogomarkPaths />
		</svg>
	);
}
