"use client"

import styles from './styles.module.scss'
import { useState } from 'react'
import { Card, CardHeader } from '@/components/ui/card'
import { DropDown } from '@/components/ui/dropdown'
import { Tag } from '@/components/ui/tag'
import { Icon } from '@/components/icons'
import { Text } from '@/components/ui/text'
import { GaugeChart } from '@/app/home/_components/ui/chart-gauge'

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
      <GaugeChart />
    </Card>
  )
}
