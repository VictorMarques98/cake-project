export function SvgWallet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={17}
      height={15}
      fill="none"
      viewBox="0 0 17 15"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14.875 3h-12.5a.625.625 0 0 1 0-1.25H13A.625.625 0 1 0 13 .5H2.375A1.875 1.875 0 0 0 .5 2.375v10a1.875 1.875 0 0 0 1.875 1.875h12.5a1.25 1.25 0 0 0 1.25-1.25V4.25A1.25 1.25 0 0 0 14.875 3Zm0 10h-12.5a.625.625 0 0 1-.625-.625V4.143c.2.071.412.107.625.107h12.5V13Zm-3.75-4.688a.938.938 0 1 1 1.875 0 .938.938 0 0 1-1.875 0Z"
      />
    </svg>
  )
}
