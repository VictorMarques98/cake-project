"use client"

import styles from './styles.module.scss'
import { useState } from 'react'
import { Card, CardHeader } from '@/components/ui/card'
import { DropDown } from '@/components/ui/dropdown'
import { Tag } from '@/components/ui/tag'
import { Icon } from '@/components/icons'
import { Text } from '@/components/ui/text'
import { Chart } from '@/app/home/_components/ui/chart'
import { getGaugeOption } from '@/app/home/_config/charts/gauge'
import { useTheme } from '@/hooks/useTheme'

const options = [
  {
    value: 'Total',
    label: 'Total'
  },
  {
    value: 'Today',
    label: 'Today'
  },
  {
    value: 'Yesterday',
    label: 'Yesterday'
  }
];

function HeaderIcon() {
  return (
    <div className={styles.icon}>
      🍰
    </div>
  )
}

export function CardOverview() {
  const [currentValue, setCurrentValue] = useState<string>('Total');
  const { isDarkMode } = useTheme();
  const gaugeChartConfig = getGaugeOption(isDarkMode);

  return (
    <Card
      className={styles.card}
    >
      <div className={styles.card_left_side}>
        <CardHeader
          icon={<HeaderIcon />}
          title="My cake value"
          action={
            <DropDown
              currentValue={currentValue}
              options={options}
              onChange={(value) => setCurrentValue(value)}
            />
          }
        />
        <div className={styles.card_details}>
          <div>
            <Tag
              icon={<Icon name="arrow-up" />}
              color='secondary'
              text='3%'
            />
            <Text
              content={currentValue}
              type="span"

            />
          </div>
          <Text
            content="$2,888,000"
            type="h3"
          />
        </div>
      </div>
      <div className={styles.chart_container}>
        <Chart
          option={gaugeChartConfig}
          className={styles.chart}
        />
      </div>
    </Card>
  )
}
