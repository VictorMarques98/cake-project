import { EChartsCoreOption } from "echarts";

export function getGaugeOption(isDarkModeEnabled: boolean): EChartsCoreOption {
  return {
    grid: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        radius: '95%',
        min: 0,
        max: 1,
        splitNumber: 3,
        axisLine: {
          show: false
        },
        pointer: {
          show: false,
        },
        axisTick: {
          length: 27,
          lineStyle: {
            color: isDarkModeEnabled ? '#fff' : '#6C4EFF',
            width: 9,
            cap: 'round'

          }
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        title: {
          offsetCenter: [0, '20%'],
          fontSize: 20,
          color: isDarkModeEnabled ? '#fff' : '#6F7285'
        },
        detail: {
          fontSize: 48,
          fontWeight: 600,
          fontFamily: 'Inter',
          offsetCenter: [0, '-5%'],
          valueAnimation: true,
          formatter: function (value: any) {
            return Math.round(value * 100) + '%';
          },
          color: isDarkModeEnabled ? '#fff' : '#18161A'
        },
        data: [
          {
            value: 0.7,
            name: 'Earned'
          }
        ]
      }
    ]
  }
}