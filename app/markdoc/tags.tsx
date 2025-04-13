import { QuickLink, QuickLinks } from "@syntax/QuickLinks";
import { TabContent, Tabs } from "@/components/md/Tabs";
// import { Fence2 } from "@/components/syntax/Fence2";
import { Callout } from "@syntax/Callout";
// import fs from "fs/promises";
// import { Tag } from "./Tag";
import React from "react";
import { Snippet } from "@/components/syntax/Snippet";
// import path from "path";

// const __dirname = path.resolve();

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
    },
  },
  // snippet: {
  //   // render: Fence2,
  //   attributes: {
  //     language: {
  //       type: String,
  //       default: "auto",
  //     },
  //     label: { type: String },
  //     description: { type: String },
  //     path: { type: String },
  //   },
  //   async transform(node: any, config: any) {
  //     const attributes = node.transformAttributes(config);

  //     const pathValue = attributes.path;

  //     let language = attributes.language ?? "auto";
  //     let content = "";

  //     if (!pathValue) {
  //       console.warn("No path provided for snippet tag");
  //     } else {
  //       const absolutePath = path.resolve(__dirname, pathValue);
  //       // Read the file content
  //       try {
  //         content = await fs.readFile(absolutePath, "utf-8");
  //       } catch (error) {
  //         console.error("Error reading file:", error);
  //         content = `Error reading file: ${absolutePath}`;
  //         language = "plain";
  //       }

  //       // return new Tag("fence2", { ...attributes, language, content, label: "Temp" });
  //     }
  //   },
  // },
};

export default tags;
