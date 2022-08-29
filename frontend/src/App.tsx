import { Header, Filter, SalesByDate, SalesSummary, PieChartCard, SalesTable } from './components';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="App__container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
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
