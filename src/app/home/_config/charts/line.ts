import * as echarts from 'echarts';
import { EChartsCoreOption } from "echarts";

export const option: EChartsCoreOption = {
  title: {
    show: true,
    text: 'Your vesting chart',
    textStyle: {
      color: '#18161A',
      fontSize: 18,
      fontWeight: 500,
      fontFamily: 'Inter'
    }
  },
  grid: {
    containLabel: true,
    top: 40,
    left: 0,
    right: 0,
    bottom: 0,
  },
  xAxis: {
    show: true,
    splitLine: {
      show: true,
    },
    axisLine: {
      show: false,
    },
    type: 'category',
    boundaryGap: false,
    data: ['Jan ‘20', 'Jul ‘20', 'Jan ‘21', 'Jul ‘21', 'Jan ‘22', 'Jul ‘22']
  },
  yAxis: {
    show: false,
    type: 'value'
  },
  tooltip: {
    show: true,
    backgroundColor: 'black',
    padding: 8,
    formatter: function (params: any) {
      return `
      Date: <strong>${params.name}</strong>
      <br />
      Will Vest: <strong>1,229 options</strong>
      <br />
      Total: <strong>12,873 options</strong>
      `
    },
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    {
      data: [0, 0, 1, 1, 2, 3, 4],
      type: 'line',
      itemStyle: {
        color: '#6C4EFF',
      },
      lineStyle: {
        width: 2,
        type: 'dashed',
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#7886FF66'
          },
          {
            offset: 1,
            color: '#D8DBDF00'
          }
        ])
      }
    },
    {
      data: [0, 0, 1, 1, 2],
      type: 'line',
      symbolSize: 15,
      itemStyle: {
        color: '#6C4EFF',
      },
      lineStyle: {
        width: 4
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#7886FF66'
          },
          {
            offset: 1,
            color: '#D8DBDF00'
          }
        ])
      },
    },

  ]
};