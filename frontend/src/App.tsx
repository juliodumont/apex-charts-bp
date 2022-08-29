import { Header, Filter, SalesByDate } from './components';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="App__container">
        <Filter />
        <SalesByDate />
      </main>
    </>
  );
}

export default App;
