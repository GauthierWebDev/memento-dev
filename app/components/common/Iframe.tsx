import React from "react";
import clsx from "clsx";

type IframeProps = {
  src: string;
  width?: string;
  height?: string;
  className?: string;
};

export function Iframe(props: IframeProps) {
  return (
    <iframe
      src={props.src}
      className={clsx("max-w-full pointer-events-none", props.className)}
      width={props.width}
      height={props.height}
    />
  );
}
