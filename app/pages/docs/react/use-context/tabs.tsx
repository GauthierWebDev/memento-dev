import { Snippet } from "@/components/Snippet";
import { name } from "eslint-plugin-prettier/recommended";

const reactNestedPropsSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  return <A theme={theme} setTheme={theme} />;
};

const A = ({ theme, setTheme }) => {
  return <B theme={theme} setTheme={setTheme} />;
};

const B = ({ theme, setTheme }) => {
  return <C theme={theme} setTheme={setTheme} />;
};`,
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		withLineNumbers: true,
		code: `import type { Dispatch, SetStateAction } from "react";

import { useState } from "react";

type Theme = "light" | "dark";

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");

  return <A theme={theme} setTheme={theme} />;
};

const A = ({ theme, setTheme }: { theme: Theme; setTheme: Dispatch<SetStateAction<Theme>> }) => {
  return <B theme={theme} setTheme={setTheme} />;
};

const B = ({ theme, setTheme }: { theme: Theme; setTheme: Dispatch<SetStateAction<Theme>> }) => {
  return <C theme={theme} setTheme={setTheme} />;
};`,
	},
];

const reactCreateContextSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `import { createContext } from "react";

// On crée notre contexte, avec une valeur par défaut : un thème clair
const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});`,
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		withLineNumbers: true,
		code: `import type { Dispatch, SetStateAction } from "react";

import { createContext } from "react";

// On crée un type pour les valeurs de thème
export type Theme = "light" | "dark";

// On crée un type pour notre contexte
type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

// On crée notre contexte, avec une valeur par défaut : un thème clair
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});`,
	},
];

const reactContextProviderSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <A />
    </ThemeContext.Provider>
  );
};`,
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		withLineNumbers: true,
		code: `import type { Theme } from "./ThemeContext";

import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <A />
    </ThemeContext.Provider>
  );
};`,
	},
];

const reactContextProviderWithValuesSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `import { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };`,
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		withLineNumbers: true,
		code: `import type { ReactNode } from "react";

import { createContext, useState } from "react";

export type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };`,
	},
];

const reactContextProviderInAppSnippets = [
	{
		name: "App.jsx",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `import { ThemeProvider } from "./ThemeContext";
import A from "./A";

const App = () => {
  return (
    <ThemeProvider>
      <A />
    </ThemeProvider>
  );
};`,
	},
];

const reactUseContextSnippets = [
	{
		name: "Utilisation du hook `useContext`",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

const C = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return <>{/** JSX */}</>;
};`,
	},
];

const reactContextHellSnippets = [
	{
		name: "Exemple de contexte imbriqué",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `root.render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <PostProvider>
            <SettingsProvider>
              <SocketProvider>
                <FriendProvider>
                  <NotificationProvider>
                    <ChatProvider>
                      <MusicProvider>
                        <VideoProvider>
                          <GameProvider>
                            <WeatherProvider>
                              <NewsProvider>
                                <CalendarProvider>
                                  <TaskProvider>
                                    <NoteProvider>
                                      <App />
                                    </NoteProvider>
                                  </TaskProvider>
                                </CalendarProvider>
                              </NewsProvider>
                            </WeatherProvider>
                          </GameProvider>
                        </VideoProvider>
                      </MusicProvider>
                    </ChatProvider>
                  </NotificationProvider>
                </FriendProvider>
              </SocketProvider>
            </SettingsProvider>
          </PostProvider>
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
);`,
	},
];

const reactContextProvidersComponentSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		withLineNumbers: true,
		code: `const Providers = ({ providers, children }) => {
  return (
    <>
      {/** Ouverture des providers */}
      {children}
      {/** Fermeture des providers */}
    </>
  );
};`,
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		withLineNumbers: true,
		code: `import type { ReactNode } from "react";

type ProvidersProps = {
  providers: ReactNode[];
  children: ReactNode;
};

const Providers = ({ providers, children }: ProvidersProps) => {
  return (
    <>
      {/** Ouverture des providers */}
      {children}
      {/** Fermeture des providers */}
    </>
  );
};`,
	},
];

const reactNestFunctionSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		code: `const nest = (children, component) => {
  return React.cloneElement(component, {}, children);
};`,
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		code: `const nest = (children: ReactNode, component: ReactNode) => {
  return React.cloneElement(component, {}, children);
};`,
	},
];

const reactNestFunctionWithReduceRightSnippets = [
	{
		name: "JSX",
		codeLanguage: "jsx",
		code: `const nest = (children, component) => {
  return React.cloneElement(component, {}, children);
};

const Providers = ({ providers, children }) => {
  return providers.reduceRight(nest, children);
};`,
	},
	{
		name: "TSX",
		codeLanguage: "tsx",
		code: `import type { ReactNode } from "react";

type ProvidersProps = {
  providers: ReactNode[];
  children: ReactNode;
};

const nest = (children: ReactNode, component: ReactNode) => {
  return React.cloneElement(component, {}, children);
};

const Providers = ({ providers, children }: ProvidersProps) => {
  return providers.reduceRight(nest, children);
};`,
	},
];

const reactCleanerProvidersSnippets = [
	{
		name: "Import lisible et maintenable pour les providers",
		codeLanguage: "jsx",
		code: `root.render(
  <StrictMode>
    <Providers
      providers={[
        <UserProvider />,
        <ThemeProvider />,
        <LanguageProvider />,
        <PostProvider />,
        <SettingsProvider />,
        <SocketProvider />,
        <FriendProvider />,
        // ...
      ]}
    >
      <App />
    </Providers>
  </StrictMode>,
);`,
	},
];

export default {
	reactNestedProps: () => <Snippet snippets={reactNestedPropsSnippets} />,
	reactCreateContext: () => <Snippet snippets={reactCreateContextSnippets} />,
	reactContextProvider: () => (
		<Snippet snippets={reactContextProviderSnippets} />
	),
	reactContextProviderWithValues: () => (
		<Snippet snippets={reactContextProviderWithValuesSnippets} />
	),
	reactContextProviderInApp: () => (
		<Snippet snippets={reactContextProviderInAppSnippets} />
	),
	reactUseContext: () => <Snippet snippets={reactUseContextSnippets} />,
	reactContextHell: () => <Snippet snippets={reactContextHellSnippets} />,
	reactContextProvidersComponent: () => (
		<Snippet snippets={reactContextProvidersComponentSnippets} />
	),
	reactNestFunction: () => <Snippet snippets={reactNestFunctionSnippets} />,
	reactNestFunctionWithReduceRight: () => (
		<Snippet snippets={reactNestFunctionWithReduceRightSnippets} />
	),
	reactCleanerProviders: () => (
		<Snippet snippets={reactCleanerProvidersSnippets} />
	),
};
