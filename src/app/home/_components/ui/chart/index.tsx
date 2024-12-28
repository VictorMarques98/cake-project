import { useEffect, useRef } from 'react'
import * as echarts from "echarts"

type Props = {
  option: echarts.EChartsCoreOption;
  className?: string;
}

export function Chart({ option, className }: Props) {
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
    <div
      ref={chartRef}
      className={className}
    />
  );
}




