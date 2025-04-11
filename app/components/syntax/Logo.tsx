function LogomarkPaths() {
  // return (
  //   <g fill="none" stroke="#38BDF8" strokeLinejoin="round" strokeWidth={3}>
  //     <path d="M10.308 5L18 17.5 10.308 30 2.615 17.5 10.308 5z" />
  //     <path d="M18 17.5L10.308 5h15.144l7.933 12.5M18 17.5h15.385L25.452 30H10.308L18 17.5z" />
  //   </g>
  // );

  return (
    <>
      <defs>
        <linearGradient
          id="l"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(12.792,-21.32,-21.32,-12.792,5.208,23.32)"
        >
          <stop offset="0" style={{ stopColor: "rgb(43,127,255)" }} />
          <stop offset="1" style={{ stopColor: "rgb(142,81,255)" }} />
        </linearGradient>
      </defs>

      <g transform="matrix(-1.76727,0,0,1.76727,49.1089,-3.53454)">
        <path
          d="M16.161,18.989L20.49,23.32L21.9,21.91L2.1,2.1L0.69,3.51L2.714,5.535L-4.085,11.253L-4.085,13.054L3.185,19.167L4.629,17.337L-1.61,12.165L4.397,7.219L9.588,12.412L6,16L6.01,16.01L6,16.01L6,22L18,22L18,20.83L16.161,18.989ZM14.417,17.244L16,18.83L16,20L8,20L8,16.5L10.837,13.663L14.417,17.244ZM8,4L16,4L16,7.5L13.16,10.34L14.41,11.59L18,8.01L17.99,8L18,8L18,2L6,2L6,3.17L8,5.17L8,4ZM25.294,12.164L19.071,17.34L20.542,19.164L27.788,13.075L27.788,11.274L20.597,5.22L19.158,7.075L25.294,12.164Z"
          style={{ fill: "url(#l)" }}
        />
      </g>
    </>
  );
}

export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 231 38" {...props}>
      <LogomarkPaths />
      <text
        className="hidden lg:block"
        fill="#1A202C"
        fontFamily="Inter Variable, sans-serif"
        fontSize={24}
        fontWeight="bold"
        letterSpacing="-.02em"
        x={74}
        y={26}
      >
        Memento Dev
      </text>
    </svg>
  );
}
