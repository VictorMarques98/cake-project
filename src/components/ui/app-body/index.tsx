import styles from './styles.module.scss'
import { ChildrenProps } from '@/types/react'
import { ChildCounter } from '@/components/ui/count-children'

export function AppBody({ children }: ChildrenProps) {
  return (
    <body>
      <div className={styles.body}>
        {children}
      </div>
      <ChildCounter>
        {children}
      </ChildCounter>
    </body>
  )
}
