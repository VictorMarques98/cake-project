import styles from './styles.module.scss'
import { useEffect, useRef } from 'react'
import * as echarts from "echarts"
import { option } from '@/app/home/_config/charts/gauge'

export function GaugeChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = echarts.init(chartRef.current);
    chartInstance.setOption(option);

    const handleResize = () => {
      chartInstance.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chartInstance.dispose();
    };
  }, [chartRef]);

  return (
    <div className={styles.container}>
      <div
        ref={chartRef}
        className={styles.chart}
      />
    </div>
  );
}




