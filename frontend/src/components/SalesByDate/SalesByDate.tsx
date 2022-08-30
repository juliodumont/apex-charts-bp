import './SalesByDate.scss';
import { buildChartSeries, chartOptions, sumSalesByDate } from './helpers';
import ReactApexChart from 'react-apexcharts';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { ChartSeriesData, FilterData, SalesByDate } from '../../types';
import { formatDate, formatPrice } from '../../utils/formatters';

type Props = {
  filterData?: FilterData;
};

const SalesByDateComponent = ({ filterData }: Props) => {
  const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
  const [chartSum, setChartSum] = useState<number>(0);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest.get<SalesByDate[]>('/sales/by-date', { params }).then((response) => {
      setChartSeries(buildChartSeries(response.data));
      setChartSum(sumSalesByDate(response.data));
    });
  }, [params]);

  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h2 className="sales-by-date-title">Evolução de Vendas</h2>
        {filterData?.dates && (
          <span className="sales-by-date-period">
            {formatDate(filterData.dates?.[0])} até {formatDate(filterData.dates?.[1])}
          </span>
        )}
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
