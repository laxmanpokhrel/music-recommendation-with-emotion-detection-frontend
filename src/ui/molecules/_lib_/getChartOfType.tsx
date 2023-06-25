import CustomBarChart from '@CustomComponents/Charts/CustomBarChart';
import CustomDonutChart from '@CustomComponents/Charts/CustomDonutChart';
import CustomPieChart from '@CustomComponents/Charts/CustomPieChart';
import CustomTreeChart from '@CustomComponents/Charts/CustomTreeChart';
import CustomLineAreaChart from '@CustomComponents/Charts/CustomTreeChart/CustomLineAreaChart';
import { ChartTypes } from '@Schemas/types';

export default function getChartOfType(type: ChartTypes) {
  switch (type) {
    case 'bar':
      return CustomBarChart;
    case 'donut':
      return CustomDonutChart;
    case 'pie':
      return CustomPieChart;
    case 'line-area':
      return CustomLineAreaChart;
    case 'tree':
      return CustomTreeChart;
    default:
      return null;
  }
}
