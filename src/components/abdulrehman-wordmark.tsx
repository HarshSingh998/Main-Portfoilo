export function AbdulRehmanWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1700 500"
      fill="none"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontFamily="var(--font-mono), monospace"
        fontWeight="800"
        fontSize="160"
        letterSpacing="0.25em"
      >
        HARSH SINGH
      </text>
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1700 500"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="${color}" font-family="monospace" font-weight="800" font-size="160" letter-spacing="0.25em">HARSH SINGH</text></svg>`;
}
