import '@/styles/main.scss'
import { ChildrenProps } from '@/types/react'

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
