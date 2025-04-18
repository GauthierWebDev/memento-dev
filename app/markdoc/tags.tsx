import { QuickLink, QuickLinks } from "@syntax/QuickLinks";
import { TabContent, Tabs } from "@/components/md/Tabs";
import { Snippet } from "@/components/syntax/Snippet";
import { Iframe } from "@/components/common/Iframe";
import { Callout } from "@syntax/Callout";
import React from "react";

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: "note",
        matches: ["note", "warning", "question"],
        errorLevel: "critical",
      },
      collapsible: {
        type: Boolean,
        default: false,
      },
    },
    render: (props: {
      title: string;
      type?: "note" | "warning" | "question";
      collapsible?: boolean;
      children: React.ReactNode;
    }) => {
      return <Callout {...props} collapsible={props.collapsible} type={props.type || "note"} />;
    },
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = "", caption }: { src: string; alt: string; caption: string }) => (
      <figure>
        <img src={src} alt={alt} loading="lazy" />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  "quick-links": {
    render: QuickLinks,
  },
  "quick-link": {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  tabs: {
    render: Tabs,
    attributes: {
      defaultSelectedTab: { type: String },
    },
  },
  tab: {
    render: TabContent,
    attributes: {
      label: { type: String },
      value: { type: String },
    },
  },
  snippet: {
    render: Snippet,
    attributes: {
      language: {
        type: String,
        default: "auto",
      },
      label: { type: String },
      path: { type: String },
      showLineNumbers: {
        type: Boolean,
        default: false,
      },
    },
  },
  img: {
    render: ({ src, alt = "", className = "" }: { src: string; alt: string; className: string }) => (
      <img src={src} alt={alt} className={className} loading="lazy" />
    ),
    attributes: {
      src: { type: String },
      alt: { type: String },
      className: { type: String },
    },
    selfClosing: true,
  },
  iframe: {
    render: Iframe,
    attributes: {
      src: { type: String },
      width: { type: String },
      height: { type: String },
      className: { type: String },
    },
    selfClosing: true,
  },
};

export default tags;
