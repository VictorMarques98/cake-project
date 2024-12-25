export function SvgFile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={14}
      height={18}
      fill="none"
      viewBox="0 0 14 18"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.692 5.433 9.317 1.058a.625.625 0 0 0-.442-.183h-7.5a1.25 1.25 0 0 0-1.25 1.25v13.75a1.25 1.25 0 0 0 1.25 1.25h11.25a1.25 1.25 0 0 0 1.25-1.25v-10a.624.624 0 0 0-.183-.442ZM9.5 3.009l2.241 2.241H9.5V3.009Zm3.125 12.866H1.375V2.125H8.25v3.75a.625.625 0 0 0 .625.625h3.75v9.375Z"
      />
    </svg>
  )
}
