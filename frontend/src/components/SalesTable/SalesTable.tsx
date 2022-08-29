import './SalesTable.scss';

const tableHeader = ['ID', 'Data', 'Gênero', 'Categoria', 'Loja', 'Forma de Pagamento', 'Total'];

const SalesTable = () => {
  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            {tableHeader.map((headerItem, index) => (
              <th key={`header-item-${index}`} className={`header-item-${index}`}>
                {headerItem}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
