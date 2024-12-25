export function SvgTag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.009 8.625 9.25.866A1.24 1.24 0 0 0 8.366.5H1.125a.625.625 0 0 0-.625.625v7.241a1.239 1.239 0 0 0 .366.884l7.759 7.759a1.25 1.25 0 0 0 1.768 0l6.616-6.616a1.25 1.25 0 0 0 0-1.768Zm-7.5 7.5L1.75 8.366V1.75h6.616l7.759 7.759-6.616 6.616ZM5.5 4.563a.938.938 0 1 1-1.875 0 .938.938 0 0 1 1.875 0Z"
      />
    </svg>
  )
}
