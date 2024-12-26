import styles from './styles.module.scss'
import { Card, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/icons'
import { Text } from '@/components/ui/text'

export function CardMotivational() {
  return (
    <Card>
      <CardHeader
        title='My motivational goal'
        action={
          <Button
            variant="primary"
            size="large"
            className={styles.edit_button}
          >
            <Icon name="pen" />
          </Button>
        }
      />
      <div className={styles.content}>
        <div className={styles.icon}>
          🏠
        </div>
        <Text
          content='Save for my new home'
          type="h3"
        />
        <Text
          content='A space for my family to enjoy together.'
          type="p"
        />
      </div>
    </Card>
  )
}
