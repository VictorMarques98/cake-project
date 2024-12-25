import { ChildrenProps } from '@/types/react'
import styles from './styles.module.scss'

export function AppBody({ children }: ChildrenProps) {
  return <body className={styles.body}>{children}</body>
}
