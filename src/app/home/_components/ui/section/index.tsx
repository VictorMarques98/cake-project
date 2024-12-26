import { ChildrenProps } from '@/types/react'
import styles from './styles.module.scss'

export function Section({ children }: ChildrenProps) {
  return (
    <section className={styles.section}>
      {children}
    </section>
  )
}
