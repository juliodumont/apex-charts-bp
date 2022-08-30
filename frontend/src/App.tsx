import { Header, Filter, SalesByDate, SalesSummary, PieChartCard, SalesTable } from './components';
import './App.css';
import { useEffect, useMemo, useState } from 'react';
import { FilterData, PieChartConfig, SalesByPaymentMethod, SalesByStore } from './types';
import { buildFilterParams, makeRequest } from './utils/request';
import { buildSalesByPaymentMethod, buildSalesByStoreChart } from './helpers';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>({
    labels: [],
    series: []
  });
  const [salesByPaymentMethod, setSalesByPaymentMethod] = useState<PieChartConfig>({
    labels: [],
    series: []
  });

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest.get<SalesByStore[]>('/sales/by-store', { params }).then((response) => {
      setSalesByStore(buildSalesByStoreChart(response.data));
    });
  }, [params]);

  useEffect(() => {
    makeRequest
      .get<SalesByPaymentMethod[]>('/sales/by-payment-method', { params })
      .then((response) => {
        setSalesByPaymentMethod(buildSalesByPaymentMethod(response.data));
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <main className="App__container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDate filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary filterData={filterData} />
          <PieChartCard name="Lojas" labels={salesByStore.labels} series={salesByStore.series} />
          <PieChartCard
            name="Pagamento"
            labels={salesByPaymentMethod.labels}
            series={salesByPaymentMethod.series}
          />
        </div>
        <SalesTable />
      </main>
    </>
  );
}

export default App;
