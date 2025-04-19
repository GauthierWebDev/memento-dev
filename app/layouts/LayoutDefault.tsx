import "./style.css";

import "./tailwind.css";

import type { JSX } from "solid-js";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link.js";

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (
    <div class={"flex max-w-5xl m-auto"}>
      <Sidebar>
        <Logo />
        <Link href="/">Welcome</Link>
        <Link href="/todo">Todo</Link>
        <Link href="/star-wars">Data Fetching</Link>
        {""}
      </Sidebar>
      <Content>{props.children}</Content>
    </div>
  );
}

function Sidebar(props: { children: JSX.Element }) {
  return (
    <div id="sidebar" class={"p-5 flex flex-col shrink-0 border-r-2 border-r-gray-200"}>
      {props.children}
    </div>
  );
}

function Content(props: { children: JSX.Element }) {
  return (
    <div id="page-container">
      <div id="page-content" class={"p-5 pb-12 min-h-screen"}>
        {props.children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div class={"p-5 mb-2"}>
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
