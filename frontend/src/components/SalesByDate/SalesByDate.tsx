import './SalesByDate.scss';
import { buildChartSeries, chartOptions, sumSalesByDate } from './helpers';
import ReactApexChart from 'react-apexcharts';
import { initialData } from './initialChartData';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';
import { ChartSeriesData, SalesByDate } from '../../types';
import { formatPrice } from '../../utils/formatters';

const SalesByDateComponent = () => {
  const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
  const [chartSum, setChartSum] = useState<number>(0);

  useEffect(() => {
    makeRequest
      .get<SalesByDate[]>('/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=FEMALE')
      .then((response) => {
        setChartSeries(buildChartSeries(response.data));
        setChartSum(sumSalesByDate(response.data));
      });
  }, []);

  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h2 className="sales-by-date-title">Evolução de Vendas</h2>
        <span className="sales-by-date-period">01/01/2017 a 31/01/2017</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h3 className="sales-by-date-quantity">{formatPrice(chartSum)}</h3>
          <p className="sales-by-date-quantity-label">Vendas no período</p>
          <p className="sales-by-date-quantity-description">
            O gráfico mostra as vendas em todas as lojas
          </p>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Vendas', data: chartSeries }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default SalesByDateComponent;
