import { BarChartFills, ChartFills, DonutChartFills, LineAreaChartFills, PieChartFills } from '@Constants/index';
import { ChartTypes } from '@Schemas/types';

export default function getChartFillOfType(type: ChartTypes) {
  switch (type) {
    case 'bar':
      return BarChartFills;
    case 'donut':
      return DonutChartFills;
    case 'pie':
      return PieChartFills;
    case 'line-area':
      return LineAreaChartFills;
    default:
      return ChartFills;
  }
}
