export function SvgLock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 512 512"
      {...props}
    >
      <title>{"ionicons-v5-g"}</title>
      <path
        d="M336 208v-95a80 80 0 0 0-160 0v95"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 64,
        }}
      />
      <rect
        width={320}
        height={272}
        x={96}
        y={208}
        rx={48}
        ry={48}
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 32,
        }}
      />
    </svg>
  )
}
