export function SvgArrowLeft(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.354 10.646a.5.5 0 1 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 1 1 .708.708L1.707 6l4.647 4.646Z"
      />
    </svg>
  )
}
