export function SvgArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={12}
      height={7}
      viewBox="0 0 12 7"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.501 6 10.5 6 7.28 2.781 6 1.502l-1.28 1.28L1.5 6h-.002v-.002l4.5-4.5H6L5.712.805l.287.693H6l4.5 4.5.001.001.693-.287-.693.287Z"
      />
    </svg>
  )
}
