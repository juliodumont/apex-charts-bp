import { Header, Filter, SalesByDate, SalesSummary, PieChartCard, SalesTable } from './components';
import './App.css';
import { useState } from 'react';
import { FilterData } from './types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

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
          <PieChartCard
            name="Lojas"
            labels={['Sobradinho', 'Brasilia', 'Planaltina']}
            series={[40, 30, 30]}
          />
          <PieChartCard
            name="Pagamento"
            labels={['Credito', 'Debito', 'Dinheiro']}
            series={[70, 20, 10]}
          />
        </div>
        <SalesTable />
      </main>
    </>
  );
}

export default App;
