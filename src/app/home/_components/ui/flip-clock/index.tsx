"use client"

import styles from './styles.module.scss'
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
import '@leenguyen/react-flip-clock-countdown/dist/index.css'

const targetTime = new Date().getTime() + 24 * 3600 * 1000 + 5000;

export function FlipClock() {
  return (
    <FlipClockCountdown
      className={styles.flip_clock}
      to={targetTime}
      showSeparators={false}
    />
  )
}