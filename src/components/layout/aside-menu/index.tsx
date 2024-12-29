"use client"

import styles from './styles.module.scss'
import Link from 'next/link'
import { routes } from '@/constants/app'
import { Icon } from '@/components/icons'
import { usePathname } from 'next/navigation'
import { Aside as AsideMenuMobile } from '@/components/ui/aside'
import { useAsideMenu, useAsideMenuActions } from '@/store/layout'
import clsx from 'clsx'

function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.nav_container}>
        {routes.map(({ href, icon, label }) => (
          <li
            key={label}
            className={clsx(
              styles.nav_link,
              pathname === href ? styles.is_active : ''
            )}
          >
            <Link href={href}>
              <Icon name={icon} />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function AsideMenu() {
  const isSideMenuOpened = useAsideMenu();
  const { toggleAsideMenu } = useAsideMenuActions();

  return (
    <>
      <AsideMenuMobile
        isOpened={isSideMenuOpened}
        onToggle={toggleAsideMenu}
        openFrom="left"
        aria-label="Side menu"
        role="navigation"
      >
        <Navigation />
      </AsideMenuMobile>
      <aside className={styles.aside_desktop}>
        <Navigation />
      </aside>
    </>
  )
}