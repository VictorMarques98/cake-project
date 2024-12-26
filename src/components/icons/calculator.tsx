export function SvgCalculator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={18}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3.25 8.375h7.5a.625.625 0 0 0 .625-.625V4a.625.625 0 0 0-.625-.625h-7.5A.625.625 0 0 0 2.625 4v3.75a.625.625 0 0 0 .625.625Zm.625-3.75h6.25v2.5h-6.25v-2.5Zm8.75-3.75H1.375a1.25 1.25 0 0 0-1.25 1.25v13.75a1.25 1.25 0 0 0 1.25 1.25h11.25a1.25 1.25 0 0 0 1.25-1.25V2.125a1.25 1.25 0 0 0-1.25-1.25Zm0 15H1.375V2.125h11.25v13.75Zm-7.813-5.313a.937.937 0 1 1-1.874 0 .937.937 0 0 1 1.874 0Zm3.125 0a.937.937 0 1 1-1.874 0 .937.937 0 0 1 1.875 0Zm3.125 0a.937.937 0 1 1-1.874 0 .937.937 0 0 1 1.874 0Zm-6.25 3.126a.937.937 0 1 1-1.874 0 .937.937 0 0 1 1.874 0Zm3.125 0a.937.937 0 1 1-1.874 0 .937.937 0 0 1 1.875 0Zm3.125 0a.937.937 0 1 1-1.874 0 .937.937 0 0 1 1.874 0Z"
      />
    </svg>
  )
}
