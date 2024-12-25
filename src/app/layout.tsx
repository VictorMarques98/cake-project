import '@/styles/global.scss'
import { AppBody } from '@/components/layout/app-body'
import { ChildrenProps } from '@/types/react'
import { Header } from '@/components/layout/header'
import { AsideMenu } from '@/components/layout/aside-menu'
import { Inter } from 'next/font/google';
import { AsideProfileMenu } from '@/components/layout/aside-profile-menu'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang='en' className={inter.className}>
      <AppBody>
        <Header />
        <AsideMenu />
        <AsideProfileMenu />
        <main style={{ backgroundColor: 'red' }}>
          {children}
        </main>
      </AppBody>
    </html>
  )
}
