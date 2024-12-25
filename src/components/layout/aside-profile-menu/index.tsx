"use client"

import styles from './styles.module.scss'
import { Aside } from '@/components/ui/aside'
import { useAsideProfileMenu, useAsideMenuActions } from '@/store/layout'
import Image from 'next/image'
import Avatar from '@/assets/images/avatar.webp'
import { Tag } from '@/components/ui/tag'
import { Icon } from '@/components/icons'
import { Switch } from '@/components/ui/switch'

export function AsideProfileMenu() {
  const isSideMenuOpened = useAsideProfileMenu();
  const { toggleAsideProfileMenu } = useAsideMenuActions();

  return (
    <Aside
      isOpened={isSideMenuOpened}
      onToggle={toggleAsideProfileMenu}
      openFrom="right"
      aria-label="Aside profile menu"
      role="navigation"
    >
      <div className={styles.menu}>
        <div className={styles.name}>
          <Image
            src={Avatar}
            alt='Avatar'
            width={40}
            height={40}
          />
          <h2>User Name</h2>
        </div>
        <Tag
          color="primary"
          icon={<Icon name="lock" />}
          text="Private access"
          aria-label="Private access"
        />
        <Switch
          aria-label="Switch environment"
          options={[
            { value: 'company', label: 'Company' },
            { value: 'employee', label: 'Employee' },
          ]}
          currentValue="company"
          onSwitch={() => { }}
        />
      </div>
    </Aside>
  )
}
