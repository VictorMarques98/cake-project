"use client"

import Link from 'next/link';
import styles from './styles.module.scss'
import { routes } from '@/constants/app'
import { Icon } from '@/components/icons'
import { usePathname } from 'next/navigation'
import { Aside } from '@/components/ui/aside';
import { useAsideMenu, useAsideMenuActions } from '@/store/layout';

export function AsideMenu() {
  const pathname = usePathname();
  const isSideMenuOpened = useAsideMenu();
  const { toggleAsideMenu } = useAsideMenuActions();

  return (
    <Aside
      isOpened={isSideMenuOpened}
      onToggle={toggleAsideMenu}
      openFrom="left"
      aria-label="Side menu"
      role="navigation"
    >
      <nav>
        <ul className={styles.nav_container}>
          {routes.map(({ href, icon, label }) => (
            <li
              key={label}
              className={[
                styles.nav_link,
                pathname === href ? styles.is_active : ''
              ].join(' ')}
            >
              <Link href={href}>
                <Icon name={icon} />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Aside>
  )
}
