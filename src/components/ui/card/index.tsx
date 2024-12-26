import clsx from 'clsx'
import styles from './styles.module.scss'
import { ChildrenProps } from '@/types/react'
import { Text } from '@/components/ui/text'

type Props = ChildrenProps & React.HTMLAttributes<HTMLElement> & {
  className?: string
}

type CardHeaderProps = {
  icon?: React.ReactNode;
  title: string;
  action?: React.ReactNode;
}

export function CardHeader({ icon, title, action }: CardHeaderProps) {
  return (
    <div className={styles.card_header}>
      {icon}
      <Text
        content={title}
        type="h2"
      />
      {action &&
        <div className={styles.card_header_action}>
          {action}
        </div>
      }
    </div>
  )
}

export function Card({ children, className, ...props }: Props) {
  return (
    <div
      className={clsx(styles.card, className)}
      {...props}
    >
      {children}
    </div>
  )
}
