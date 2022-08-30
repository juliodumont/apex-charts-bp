import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './PieChartCard.scss';

type PieChartCardProps = {
  labels: string[];
  name: string;
  series: number[];
};

const PieChartCard = ({ labels = [], name, series = [] }: PieChartCardProps) => {
  return (
    <div className="pie-chart-card base-card">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width={320}
        height={320}
        series={series}
      />
    </div>
  );
};

export default PieChartCard;
