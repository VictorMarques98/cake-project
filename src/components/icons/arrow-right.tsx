export function SvgArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={7}
      height={12}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="m6.354 6.354-5 5a.5.5 0 0 1-.708-.708L5.293 6 .646 1.354a.5.5 0 1 1 .708-.708l5 5a.5.5 0 0 1 0 .708Z"
      />
    </svg>
  )
}
