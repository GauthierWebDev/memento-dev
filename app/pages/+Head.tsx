import { usePageContext } from "vike-react/usePageContext";
import logoUrl from "@/assets/logo.svg";
import React from "react";

export default function HeadDefault() {
  const { cookies } = usePageContext();

  return (
    <>
      <link rel="icon" href={logoUrl} />
      {cookies.consent.analytics && (
        <>
          <script defer src="https://cloud.umami.is/script.js" data-website-id="ba70261e-d145-4dd1-b0e8-27cbf4927b74" />

          <script async src={`https://www.googletagmanager.com/gtag/js?id=GTM-NRMKQ68K`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GTM-NRMKQ68K');`,
            }}
          />
        </>
      )}
    </>
  );
}
