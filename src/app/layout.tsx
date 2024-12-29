import '@/styles/global.scss'
import { AppBody } from '@/components/ui/app-body'
import { ChildrenProps } from '@/types/react'
import { Header } from '@/components/layout/header'
import { AsideMenu } from '@/components/layout/aside-menu'
import { Inter } from 'next/font/google';
import { AsideProfileMenu } from '@/components/layout/aside-profile-menu'
import { AppProviders } from '@/providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html
      lang='en'
      className={inter.className}
    >
      <AppProviders>
        <AppBody>
          <Header />
          <AsideMenu />
          <AsideProfileMenu />
          <main>
            {children}
          </main>
        </AppBody>
      </AppProviders>
    </html>
  )
}
