import { HeroBackground } from "@syntax/HeroBackground";
import blurIndigoImage from "@/images/blur-indigo.png";
import blurCyanImage from "@/images/blur-cyan.png";
import { Image } from "@/components/common/Image";
import { Highlight } from "prism-react-renderer";
import { Button } from "@syntax/Button";
import { Fragment } from "react";
import clsx from "clsx";

const codeLanguage = "javascript";
const code = `export default {
  role: 'developer',
  qualifications: [
    'DWWM',
    'CDA',
    'CDUI',
  ]
}`;

const tabs = [
  { name: "memento-dev.config.js", isActive: true },
  { name: "package.json", isActive: false },
];

function TrafficLightsIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  );
}

export function Hero() {
  return (
    <div className="overflow-hidden bg-slate-900 dark:mt-[-4.75rem] dark:-mb-32 dark:pt-[4.75rem] dark:pb-32">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl w-full grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute right-full bottom-full -mr-72 -mb-56 opacity-50"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
            />
            <div className="relative">
              <p className="inline bg-linear-to-r from-indigo-200 via-violet-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Souviens-toi que tu développeras.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                Découvrez des ressources essentielles pour améliorer tes compétences en développement.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="/docs">Accédez aux ressources</Button>
                <Button href="https://github.com/GauthierWebDev/memento-dev" variant="secondary">
                  Voir sur Github
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] lg:-top-32 lg:right-0 lg:-bottom-32 lg:left-[calc(50%+14rem)] lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
            </div>
            <div className="relative">
              <Image className="absolute -top-64 -right-64" src={blurCyanImage} alt="" width={530} height={530} />
              <Image className="absolute -right-44 -bottom-40" src={blurIndigoImage} alt="" width={567} height={567} />
              <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-violet-300 via-violet-300/70 to-purple-300 opacity-10 blur-lg" />
              <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-violet-300 via-violet-300/70 to-purple-300 opacity-10" />
              <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur-sm">
                <div className="absolute -top-px right-11 left-20 h-px bg-linear-to-r from-violet-300/0 via-violet-300/70 to-violet-300/0" />
                <div className="absolute right-20 -bottom-px left-11 h-px bg-linear-to-r from-purple-400/0 via-purple-400 to-purple-400/0" />
                <div className="pt-4 pl-4">
                  <TrafficLightsIcon className="h-2.5 w-auto stroke-slate-500/30" />
                  <div className="mt-4 flex space-x-2 text-xs">
                    {tabs.map((tab) => (
                      <div
                        key={tab.name}
                        className={clsx(
                          "flex h-6 rounded-full",
                          tab.isActive
                            ? "bg-linear-to-r from-violet-400/30 via-violet-400 to-violet-400/30 p-px font-medium text-violet-300"
                            : "text-slate-500",
                        )}
                      >
                        <div className={clsx("flex items-center rounded-full px-2.5", tab.isActive && "bg-slate-800")}>
                          {tab.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-start px-1 text-sm">
                    <div
                      aria-hidden="true"
                      className="border-r border-slate-300/5 pr-4 font-mono text-slate-600 select-none"
                    >
                      {Array.from({
                        length: code.split("\n").length,
                      }).map((_, index) => (
                        <Fragment key={index}>
                          {(index + 1).toString().padStart(2, "0")}
                          <br />
                        </Fragment>
                      ))}
                    </div>
                    <Highlight code={code} language={codeLanguage} theme={{ plain: {}, styles: [] }}>
                      {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={clsx(className, "flex overflow-x-auto pb-6")} style={style}>
                          <code className="px-4">
                            {tokens.map((line, lineIndex) => (
                              <div key={lineIndex} {...getLineProps({ line })}>
                                {line.map((token, tokenIndex) => (
                                  <span key={tokenIndex} {...getTokenProps({ token })} />
                                ))}
                              </div>
                            ))}
                          </code>
                        </pre>
                      )}
                    </Highlight>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
