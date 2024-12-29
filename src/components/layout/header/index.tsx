"use client"

import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '@/assets/images/avatar.webp'
import { SvgHamburgerMenu } from '@/components/icons/hamburger-menu'
import { Button } from '@/components/ui/button'
import { useAsideMenuActions } from '@/store/layout'
import { Tag } from '@/components/ui/tag'
import { Icon } from '@/components/icons'
import { Switch } from '@/components/ui/switch'
import { ToggleTheme } from '@/components/ui/toggle-theme'
import { useTheme } from '@/hooks/useTheme'

export function Header() {
  const { toggleAsideMenu, toggleAsideProfileMenu } = useAsideMenuActions();
  const { isDarkMode } = useTheme();

  return (
    <header className={styles.header}>
      <Button
        aria-label="Open aside menu"
        onClick={toggleAsideMenu}
        variant="primary"
        size="medium"
      >
        <SvgHamburgerMenu
          width={30}
          height={30}
        />
      </Button>
      <Link href='/'>
        <Image
          src={isDarkMode ? "/images/logo-white.webp" : "/images/logo-dark.webp"}
          alt='Logo Cake Dark'
          width={77}
          height={21}
        />
      </Link>
      <Tag
        color="primary"
        icon={<Icon name="lock" />}
        text="Private access"
        aria-label="Private access"
      />
      <span className={styles.spacer} />
      <ToggleTheme />
      <Switch
        aria-label="Switch environment"
        options={[
          { value: 'company', label: 'Company' },
          { value: 'employee', label: 'Employee' },
        ]}
        currentValue="company"
        onSwitch={() => { }}
        className={styles.hide_on_mobile}
      />
      <Button
        aria-label="Open help menu"
        variant="secondary"
        size="medium"
        className={styles.hide_on_mobile}
      >
        <Icon name="question" />
      </Button>
      <Button
        variant="primary"
        size="medium"
        aria-label="Open aside profile menu"
        onClick={toggleAsideProfileMenu}
      >
        <Image
          src={Avatar}
          alt='Avatar'
          width={40}
          height={40}
        />
      </Button>
    </header>
  )
}
