import React from "react";

export function Image(props: { src: string; alt: string } & React.ComponentPropsWithoutRef<"img">) {
  return <img {...props} src={props.src} alt={props.alt} loading="lazy" />;
}
