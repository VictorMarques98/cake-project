export function SvgPen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.31 4.878 14.122.688a1.5 1.5 0 0 0-2.122 0L.44 12.25A1.487 1.487 0 0 0 0 13.31v4.19A1.5 1.5 0 0 0 1.5 19h4.19a1.487 1.487 0 0 0 1.06-.44L18.31 7a1.5 1.5 0 0 0 0-2.122ZM5.69 17.5H1.5v-4.19l8.25-8.25 4.19 4.19-8.25 8.25ZM15 8.189 10.81 4l2.25-2.25 4.19 4.189L15 8.189Z"
      />
    </svg>
  )
}
