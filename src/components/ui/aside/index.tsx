"use client"

import styles from './styles.module.scss'

type Props = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  isOpened: boolean;
  onToggle: () => void;
  openFrom: "left" | "right";
}

export function Aside({ 
  children, 
  isOpened, 
  onToggle, 
  openFrom, 
  ...props 
}: Props) {
  return (
    <>
      <aside
        className={[
          styles.aside,
          openFrom === 'left' ? styles.from_left : styles.from_right,
          isOpened ? styles.is_opened : ''
        ].join(' ')}
        aria-hidden={!isOpened}
        {...props}
      >
        {children}
      </aside>
      <button
        aria-label="Close menu"
        type="button"
        onClick={onToggle}
        className={[
          styles.overlay,
          isOpened ? styles.is_opened : ''
        ].join(' ')}
      />
    </>
  )
}
