import './SalesByDate.scss';
import { chartOptions } from './helpers';
import ReactApexChart from 'react-apexcharts';
import { initialData } from './initialChartData';

const SalesByDate = () => {
  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h2 className="sales-by-date-title">Evolução de Vendas</h2>
        <span className="sales-by-date-period">01/01/2017 a 31/01/2017</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h3 className="sales-by-date-quantity">R$ 464.988,00</h3>
          <p className="sales-by-date-quantity-label">Vendas no período</p>
          <p className="sales-by-date-quantity-description">
            O gráfico mostra as vendas em todas as lojas
          </p>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Vendas', data: initialData }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default SalesByDate;
