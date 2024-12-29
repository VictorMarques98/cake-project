"use client"

import styles from './styles.module.scss'
import { Text } from '@/components/ui/text'
import { Card, CardHeader } from '@/components/ui/card'
import { Tag } from '@/components/ui/tag'
import { Icon } from '@/components/icons'
import { FlipClock } from '@/app/home/_components/ui/flip-clock'
import { Chart } from '@/app/home/_components/ui/chart'
import { getLineChartConfig } from '@/app/home/_config/charts/line'
import { useTheme } from '@/hooks/useTheme'

function CardVestingOverview() {
  return (
    <div className={styles.card_vesting_overview}>
      <div className={styles.card_vesting_check}>
        <p className={styles.description}>
          You have <strong>vested</strong> since last check
        </p>
        <Tag
          icon={<Icon name='arrow-up' />}
          color='secondary'
          text='5%'
        />
      </div>
      <div className={styles.card_vesting_details}>
        <Text
          content="1,800"
          type="h3"
        />
        <Text
          content=" Options"
          type="span"
        />
      </div>
    </div>
  )
}

function CardVestingCounter() {
  return (
    <div className={styles.card_vesting_counter}>
      <p className={styles.description}>
        <strong>400 more </strong>
        coming in
      </p>
      <FlipClock />
    </div>
  )
}

export function CardVesting() {
  const { isDarkMode } = useTheme();
  const lineChartConfig = getLineChartConfig(isDarkMode);

  return (
    <Card className={styles.card_vesting}>
      <CardHeader title='Vesting' />
      <CardVestingOverview />
      <CardVestingCounter />
      <div className={styles.spacer} />
      <div className={styles.chart_container}>
        <Chart
          option={lineChartConfig}
          className={styles.chart}
        />
      </div>
    </Card>
  )
}
