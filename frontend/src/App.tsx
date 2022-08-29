import { Header, Filter, SalesByDate, SalesSummary } from './components';
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
        </div>
      </main>
    </>
  );
}

export default App;
