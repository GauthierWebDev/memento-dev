import { Snippet } from "@/components/Snippet";

const reactInitSnippets = [
	{
		name: "NPM",
		codeLanguage: "bash",
		code: "npm init vite",
	},
	{
		name: "Yarn",
		codeLanguage: "bash",
		code: "yarn create vite",
	},
	{
		name: "PNPM",
		codeLanguage: "bash",
		code: "pnpm create vite",
	},
	{
		name: "Bun",
		codeLanguage: "bash",
		code: "bun create vite",
	},
];

const reactInstallSnippets = [
	{
		name: "NPM",
		codeLanguage: "bash",
		code: `cd mon-projet
npm install
npm run dev`,
	},
	{
		name: "Yarn",
		codeLanguage: "bash",
		code: `cd mon-projet
yarn install
yarn dev`,
	},
	{
		name: "PNPM",
		codeLanguage: "bash",
		code: `cd mon-projet
pnpm install
pnpm dev`,
	},
	{
		name: "Bun",
		codeLanguage: "bash",
		code: `cd mon-projet
bun install
bun dev`,
	},
];

export default {
	reactInit: () => <Snippet snippets={reactInitSnippets} />,
	reactInstall: () => <Snippet snippets={reactInstallSnippets} />,
};
