import styles from './styles.module.scss'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Text } from '@/components/ui/text'
import { Icon } from '@/components/icons'

export function CardCalculator() {
  return (
    <Card className={styles.card_calculator}>
      <Image
        src="/images/chart.webp"
        alt="Chart"
        width={271}
        height={264}
      />
      <Text
        content="Equity Calculator"
        type="h2"
      />
      <Text
        content="Calculate what your equity could be in the future"
        type="p"
      />
      <button
        type="button"
        className={styles.button_calculator}
      >
        Calculate
        <Icon name="calculator" />
      </button>
    </Card>
  )
}
