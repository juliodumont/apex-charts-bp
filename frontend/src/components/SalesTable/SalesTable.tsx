import { useEffect, useMemo, useState } from 'react';
import { FilterData, Sale, SalesResponse } from '../../types';
import { formatDate, formatGender, formatPrice } from '../../utils/formatters';
import { buildFilterParams, makeRequest } from '../../utils/request';
import './SalesTable.scss';

const tableHeader = ['ID', 'Data', 'Gênero', 'Categoria', 'Loja', 'Forma de Pagamento', 'Total'];

type Props = {
  filterData?: FilterData;
};

const extraParams = {
  page: 0,
  size: 12,
  sort: 'date,desc'
};

const SalesTable = ({ filterData }: Props) => {
  const [sales, setSales] = useState<Sale[]>([]);

  const params = useMemo(() => buildFilterParams(filterData, extraParams), [filterData]);

  useEffect(() => {
    makeRequest.get<SalesResponse>('/sales', { params }).then((response) => {
      setSales(response.data.content);
    });
  }, [params]);

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
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>#{sale.id}</td>
              <td>{formatDate(sale.date)}</td>
              <td>{formatGender(sale.gender)}</td>
              <td>{sale.categoryName}</td>
              <td>{sale.storeName}</td>
              <td>{sale.paymentMethod}</td>
              <td>{formatPrice(sale.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
