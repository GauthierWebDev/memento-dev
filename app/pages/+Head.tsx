/* eslint-disable solid/no-innerhtml */

// https://vike.dev/Head

export default function HeadDefault() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.PUBLIC_ENV__GOOGLE_ANALYTICS}`}
      />
      <script
        innerHTML={`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${import.meta.env.PUBLIC_ENV__GOOGLE_ANALYTICS}');`}
      />
    </>
  );
}
